const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

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

//Endpoint Sign-up (Registrarse)
server.post('/sign-up', (req, res) => {
  console.log('Petición a la ruta POST /sign-up');
  const queryCheck = db.prepare('SELECT * FROM users WHERE email=?');
  const foundUser = queryCheck.get(req.body.email);
  if (foundUser) {
    res.json({
      success: false,
      errorMessage: 'Usuaria ya existente',
    });
  } else {
    const query = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
    const result = query.run(req.body.email, req.body.password);
    if (result) {
      res.json({
        success: true,
        userId: result,
      });
    } else {
      res.json({
        success: false,
        errorMessage: 'Ha habido un error',
      });
    }
  }
});

//Endpoint perfil de usuario
server.post('/user/profile', (req, res) => {
  console.log('Petición a la ruta POST /user/profile');
  const userId = req.header('user-id');
  const query = db.prepare('UPDATE users SET name= ?, email = ?, password = ? WHERE id = ?');
  const result = query.run(req.body.name, req.body.email, req.body.password, userId);

  res.json({
    success: true,
  });
});
//Endpoint recuperar datos del perfil de usuario
server.get('/user/profile', (req, res) => {
  console.log('Petición a la ruta GET /user/profile');
  const userId = req.header('user-id');
  const query = db.prepare('SELECT name, email, password FROM users WHERE id=?');
  const result = query.get(userId);

  res.json(result);
});

server.get('/user/movies', (req, res) => {
  res.json({
    success: true,
    movies: [],
  });
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
