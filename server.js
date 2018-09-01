'use strict';

require ('dotenv').config();
const express = require('express');
const pg = require('pg');
const superagent = require('superagent');

// application setup
const app = express();
const PORT = process.env.PORT;

// database setup
const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.on('error', err => console.error(err));

// middleware setup
// middleware necessary to allow request.body to be parsed
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

// set the view engine for server-side templating
app.set('view engine', 'ejs');

// API routes
app.get('/', (request, response) => { response.redirect('/books');});

app.get('/books', books);
app.post('/books', addBook);

app.get('/books/:id', bookDetails);

app.get('/new', showNewBookForm);

//local app search
app.get('/find', find);
app.post('/find', findBook);

//google search
app.get('/search', apiSearchForm);
app.post('/search', searchGoogle);


// 404
app.use('*', (request, response) => {response.render('pages/error');});

// callbacks
function books (request, response) {
  client.query(`SELECT image_url, title, author, id FROM books ORDER BY title;`)
    .then(results => response.render('index', {books : results.rows}))
    .catch(err => {
      console.error(err);
      response.status(500).send(err);
    });
}

function find (request, response) {
  response.render('pages/find');
}

function findBook (request, response) {

  let sql = `SELECT image_url, title, author, id FROM books `;
  let title = `${request.body.title}`, author = `${request.body.author}`;

  if (request.body.title) {
    sql += ` WHERE title ILIKE ('%${title}%')`;

    if (request.body.author) {
      sql += ` AND author ILIKE ('%${author}%')`;
    }
  }
  else if (request.body.author) {
    sql += ` WHERE author ILIKE ('%${author}%')`;
  }

  sql += `;`;

  client.query(sql)
    .then(
      results => response.render('pages/show', {books: results.rows, message: 'Here are your search results!'}))
    .catch(err => {
      console.log(err);
      response.status(500).send(err);
    });
}

function apiSearchForm(request, response) {
  response.render('pages/api-search');
}

function searchGoogle(request, response) {
  let url = `https://www.googleapis.com/books/v1/volumes`;
  let query = ``;
  let modifiedRequest = request.body.search[0].split(' ').join('+');
  if (request.body.search[1] === 'title') {
    query = `+intitle:${modifiedRequest}`;
  }
  else if (request.body.search[1] === 'author') {
    query = `+inauthor:${modifiedRequest}`;
  }
  superagent.get(url).query({'q': query})
    .then(googleResults => googleResults.body.items.map(aGoogleBook => {
      let {title, subtitle, authors, industryIdentifiers, imageLinks, description} = aGoogleBook.volumeInfo;

      let placeholderImage = `http://books.google.com/books/content?id=X21mDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`;

      let parsedId = '';

      if (industryIdentifiers){
        industryIdentifiers.forEach(function(current){
          if (current.type === 'ISBN_13') {
            parsedId = `ISBN_13_${current.identifier}`;
          }
        });
      }

      return {
        title: title ? title : 'no title available',
        subtitle: subtitle ? subtitle : '',
        author: authors ? authors[0] : 'no author available',
        isbn: parsedId ? parsedId : 'no ISBN available',
        image_url: imageLinks ? imageLinks.thumbnail : placeholderImage,
        description: description ? description : 'No description available',
        id: parsedId ? parsedId : '',
      };
    }))
    .then(bookInfo => response.render('pages/api-results', {results: bookInfo}))
    .catch(err => response.render('pages/error', {error: err}));
}

function bookDetails (request, response) {
  let sql = `SELECT image_url, title, author, isbn, description, id FROM books WHERE id = $1`;
  let values = [request.params.id];
  client.query(sql, values)
    .then(results => response.render('pages/show', {books : results.rows, message: ''}))
    .catch(err => {
      console.log(err);
      response.status(500).send(err);
    });
}

function addBook (request, response) {
  let {title, author, isbn, image_url, description} = request.body;
  let sql = `INSERT INTO books(title, author, isbn, image_url, description) VALUES ($1, $2, $3, $4, $5);`;
  let values = [title, author, isbn, image_url, description];
  client.query(sql, values)
    .then(
      getIdFromISBN(request,response)
    )
    .catch(err => {
      console.error(err);
      response.status(500).send(err);
    });
}

function getIdFromISBN(request, response) {
  let isbn = request.body.isbn;
  let sql = `SELECT id, image_url, title, author, isbn, description FROM books WHERE isbn=$1`;
  let values = [isbn];
  client.query(sql, values)
    .then(results => {
      //response.redirect(`/books/${results.rows[0].id}`, {message: 'you added a book!'});
      response.render('pages/show', {books : results.rows, message: 'you added a book!'});
    })
    .catch(err => {
      console.error(err);
      response.status(500).send(err);
    });
}

function showNewBookForm (request, response) {
  response.render('pages/new');
}

// listener
app.listen(PORT, () => console.log('listening on PORT',PORT));


