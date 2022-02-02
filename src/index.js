const express = require('express');
const cors = require('cors');
const movies = require('./movies.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movies', (req, res) => {
  console.log('Petición a la ruta GET / ');
  const response = movies;
  //Me devuelve error 500
  //const filteredData = response.filter((movie) => movie.gender === genderFilterParam);
  res.json(response);
});
