const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const users = require('./data/users.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

//Servidor de estaticos
const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));
//Servidor de estaticos imagenes
const staticServerImage = './src/public-movies-images';
server.use(express.static(staticServerImage));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const db = new Database('./src/db/database.db', { verbose: console.log });

//Endpoint para obtener las peliculas
server.get('/movies', (req, res) => {
  console.log('Petición a la ruta GET /movies');
  const response = {
    success: true,
    movies: [],
  };

  let queryString = 'SELECT * FROM movies';
  if (req.query.gender !== '') {
    queryString += ' WHERE gender = ?';
  }

  queryString += ' ORDER BY title';

  if (req.query.sort === 'desc') {
    queryString += ' DESC';
  }

  const query = db.prepare(queryString);
  let allMovies = [];
  if (req.query.gender !== '') {
    allMovies = query.all(req.query.gender);
  } else {
    allMovies = query.all();
  }

  response.movies = allMovies;
  res.json(response);
});

//Endpoint Login
server.post('/login', (req, res) => {
  console.log('Petición a la ruta POST /login');
  console.log('patata');
  const query = db.prepare('SELECT * FROM users WHERE email=? AND password=?');
  const foundUser = query.get(req.body.email, req.body.password);

  if (foundUser) {
    res.json({
      success: true,
      userId: foundUser.id,
    });
  } else {
    res.json({
      success: false,
      errorMessage: 'Usuaria/o no encontrada/o',
    });
  }
});

//servidor de estáticos css
const staticServerCss = './src/static/styles';
server.use(express.static(staticServerCss));

//Endpoint para devolver la vista de una pelicula usando motor de plantillas.
server.get('/movies/:movieId', (req, res) => {
  const query = db.prepare('SELECT * FROM movies WHERE id = ?');
  const selectedMovie = query.get(req.params.movieId);

  res.render('movie', selectedMovie);
});
