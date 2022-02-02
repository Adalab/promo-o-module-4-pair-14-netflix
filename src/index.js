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
  console.log('Petición a la ruta GET /movies');
  const response = {
    success: true,
    movies: [],
  };

  const filteredData = movies.movies.movies
    .filter((movie) => {
      if (req.query.gender) {
        return movie.gender === req.query.gender;
      }

      return true;
    })
    .sort(function (a, b) {
      const result = a.title.localeCompare(b.title);
      if (req.query.sort === 'desc') {
        return result * -1;
      }
      return result;
    });

  response.movies = filteredData;
  res.json(response);
});
