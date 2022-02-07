const express = require('express');
const cors = require('cors');
const movies = require('./movies.json');
const Database = require('better-sqlite3');
const db = new Database('./src/db/movies.db', { verbose: console.log });

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
//Motor de plantillas
server.set('view engine', 'ejs');

//servidor de estáticos
const staticServerPath = './src/public';
server.use(express.static(staticServerPath));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movies', (req, res) => {
  console.log('Petición a la ruta GET / ');
  const response = {
    success: true,
    movies: [],
  };
  const query = db.prepare('SELECT * FROM movies');
  const moviesPrueba = query.all();
  console.log(moviesPrueba);
  const genderFilterParam = req.query.gender;
  const sortFilterParam = req.query.sort;
  const filteredData = moviesPrueba.filter((movie) => {
    if (genderFilterParam) {
      return movie.gender === genderFilterParam;
    }
    return true;
  });

  response.movies = filteredData;
  res.json(response);
});

//servidor de estáticos imagenes
const staticServerImages = './src/public-movies-images';
server.use(express.static(staticServerImages));

//servidor de estáticos css
const staticServerCss = './src/static/styles';
server.use(express.static(staticServerCss));

//URL params
server.get('/movies/:movieId', (req, res) => {
  const paramMovieId = req.params.movieId;
  const foundMovie = movies.movies.movies.find((movie) => movie.id === paramMovieId);
  res.render('movie', foundMovie);
});
