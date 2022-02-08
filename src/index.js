const express = require("express");
const cors = require("cors");
//const movies = require("./data/movies.json");
const users = require("./data/users.json");
const Database = require('better-sqlite3');
const db = new Database('./src/db/movies.db', { verbose: console.log });

// create and config server
const app = express();

//configar el servidor
app.use(cors());
app.use(express.json());

// init express aplication
const serverPort = 4000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//configuración ejs plantilla
app.set('view engine', 'ejs');

app.get("/movies", (req, res) => {
  console.log("petición a la ruta Get /");
  const response = {
    success: true,
    movies: [],
  };
  const query = db.prepare('SELECT * FROM movies');
  const moviesDatabase = query.all();
  const genderFilterParam = req.query.gender;
  const sortFilterParam = req.query.sort;
  const filterData = moviesDatabase.filter((movie) => {
    if (genderFilterParam) {
      return movie.gender === genderFilterParam;
    } 
    return true;
  })
  .sort((a,b)=>{
    if(sortFilterParam === "asc"){
      if(a.title > b.title){
        return 1
      }else{
        return -1;
      };
    }else if(sortFilterParam === "desc"){
      if(a.title < b.title){
        return 1;
      }else{
        return -1;
      };
    }
  });
  response.movies = filterData;
  res.json(response);
});

//petición post body params
app.post("/login", (req, res) => {
  console.log("petición a la ruta Post /");
  console.log(req.body.email);
  const response = {
    success: true,
    users: [],
  };
  const query = db.prepare('SELECT * FROM users');
  const usersDatabase = query.all();
  const filteredUsers = usersDatabase.find((user) => {
    if (req.body.email === user.email) {
      res.json({
        success: true,
        userId: "id_de_la_usuaria_encontrada",
      });
    } else {
      res.json({
        success: false,
        errorMessage: "Usuaria/o no encontrada/o",
      });
    }
  });
  response.users = filteredUsers;
  res.json(response);
});

//create static server
const staticServerPathWeb = "./src/public"; // En esta carpeta ponemos los ficheros estáticos
app.use(express.static(staticServerPathWeb));

//create static server for images
const staticServerPathImages = "./src/public-movies-images"; // En esta carpeta ponemos los ficheros estáticos
app.use(express.static(staticServerPathImages));

//create static server for css
const staticServerPathStyles = "./src/public-movies-css"; // En esta carpeta ponemos los ficheros estáticos
app.use(express.static(staticServerPathStyles));

//URL params
//esto no me funciona bien *
app.get("/movie/:movieId", (req,res)=>{
const paramMovieId = req.params.movieId;
console.log(paramMovieId);
const query = db.prepare('SELECT id FROM movies');
const moviesDataId = query.get(paramMovieId);
/*const foundMovie = moviesDataId.find(movie => {
  return movie.id === paramMovieId;
})*/
console.log(moviesDataId);
//console.log(foundMovie);
res.render('movie', moviesDataId);
});
