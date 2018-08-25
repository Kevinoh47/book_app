'use strict';

require ('dotenv').config();
const express = require('express');
const app = express();
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

const PORT = process.env.PORT;

client.connect();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

//callbacks
const books = (request, response) => {
  client.query(`SELECT image_url, title, author, id FROM books ORDER BY title;`)
    .then(results => response.render('index', {books : results.rows}))
    .catch(err => {
      console.error(err);
      response.status(500).send(err);
    });
};

const bookDetails = (request, response) => {
  let sql = `SELECT image_url, title, author, isbn, description FROM books WHERE id = $1`;
  let values = [request.params.id];
  client.query(sql, values)
    .then(
      results => response.render('pages/show', {books : results.rows}))
    .catch(err => {
      console.log(err);
      response.status(500).send(err);
    });
};

//routes
app.get('/', (request, response) => { response.redirect('/books');});

app.get('/books', books);

app.get('/books/:id', bookDetails);

//404
app.use('*', (request, response) => {response.render('pages/error');});

//listener
app.listen(PORT, () => console.log('listening on PORT',PORT));


