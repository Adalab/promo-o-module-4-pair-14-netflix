const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

const movies = require('./data/movies.json');
const users = require('./data/users.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

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
  //const allMovies = query.all();
  console.log(allMovies);
  /*const genderFilterParam = req.query.gender;
  const sortFilterParam = req.query.sort;*/

  //Filtro por género
  /*const moviesData = allMovies
    .filter((movie) => {
      if (genderFilterParam) {
        return movie.gender === genderFilterParam;
      }
      return true;
    })
    .sort(function (a, b) {
      const result = a.title.localeCompare(b.title);
      if (req.query.sort === 'desc') {
        return result * -1;
      }
      return result;
    });*/

  response.movies = allMovies;
  res.json(response);
});

server.post('/login', (req, res) => {
  console.log('Petición a la ruta POST /login');
  const emailLogin = req.body.email;
  const passwordLogin = req.body.password;
  const foundUser = users.find(
    (eachUser) => eachUser.password === passwordLogin && eachUser.email === emailLogin
  );
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
