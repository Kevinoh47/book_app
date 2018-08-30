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

app.delete('/books/:id', deleteBook);

app.get('/new', showNewBookForm);

app.get('/find', find);
app.post('/find', findBook);

//app.get('/delete', showDeleteBookForm);

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
    sql += ` WHERE title LIKE ('%${title}%')`;

    if (request.body.author) {
      sql += ` AND author LIKE ('%${author}%')`;
    }
  }
  else if (request.body.author) {
    sql += ` WHERE author LIKE ('%${author}%')`;
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
function deleteBook (request, response) {
  let sql = `DELETE FROM books WHERE id = $1`;
  let values = [request.params.id];
  client.query(sql, values)
    .then(results => response.render('pages/show', {books: results.rows, message: 'You deleted a book.'}))
    .catch(err => {
      console.log(err);
      response.status(500).send(err);
    });
}
function bookDetails (request, response) {
  let sql = `SELECT image_url, title, author, isbn, description FROM books WHERE id = $1`;
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
      //response.redirect(`/books/${results.rows[0].id}`, {message: 'you added a book'});
      //console.log("RESULTSROWS", results.rows);
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


