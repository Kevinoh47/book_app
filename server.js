require ('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

client.connect();

app.set('view engine', 'ejs');

app.use(express.static('./public'));

//landing page route.
app.get('/', (request, response) => {
  response.send('<h1>This is Best Books\' landing page.</h1>');
});

//test route.
app.get('/ping', (request, response) => {
  response.send('pong');
});

//books list route.
app.get('/books', (request, response) => {
  client.query(`SELECT title, author, image_url FROM books ORDER BY title;`)
    .then(results => response.render('index', {books : results.rows}))
    .catch(err => {
      console.error(err);
      response.status(500).send(err);
    });
});

//404
app.use('*', (request, response) => {response.render('pages/error');});

app.listen(PORT, () => console.log('listening on PORT',PORT));


