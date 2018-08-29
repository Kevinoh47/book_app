'use strict';

require ('dotenv').config();
const express = require('express');
const pg = require('pg');

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

function bookDetails (request, response) {
  let sql = `SELECT image_url, title, author, isbn, description FROM books WHERE id = $1`;
  let values = [request.params.id];
  client.query(sql, values)
    .then(
      results => response.render('pages/show', {books : results.rows}))
    .catch(err => {
      console.log(err);
      response.status(500).send(err);
    });
}

function addBook (request, response) {
  console.log('inside new callback...', request.body);
  let {title, author, isbn, image_url, description} = request.body;
  console.log(title, author);
  let sql = `INSERT INTO books(title, author, isbn, image_url, description) VALUES ($1, $2, $3, $4, $5);`;
  let values = [title, author, isbn, image_url, description];
  return client.query(sql, values)
    .then(response.redirect('/books'))
    .then(app.get('/books'))
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


