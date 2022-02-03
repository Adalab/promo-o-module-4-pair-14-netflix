const express = require('express');
const cors = require('cors');
const movies = require('./movies.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

//servidor de estáticos 
const staticServerPath = "./src/public";
server.use(express.static(staticServerPath));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movies', (req, res) => {
  console.log('Petición a la ruta GET / ');
  const response = {
    success:true,
    movies:[]
  };
  const genderFilterParam=req.query.gender;
  const sortFilterParam = req.query.sort;
  const filteredData = movies.movies.movies.filter((movie) => {
    if(genderFilterParam){
      return movie.gender===genderFilterParam;
    }
    return true;
  });
  response.movies=filteredData;
  res.json(response);
});

//servidor de estáticos imagenes
const staticServerImages = "./src/public-movies-images";
server.use(express.static(staticServerImages));
