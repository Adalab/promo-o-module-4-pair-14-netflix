// login

const getMoviesFromApi = (params) => {
  console.log('Se están pidiendo las películas de la app');
<<<<<<< HEAD
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(`http://localhost:4000/movies?gender=${params.gender}&sort=${params.sort}`, { method: 'GET' })
=======
  console.log(gender);
  return fetch(`http://localhost:4000/movies?gender=${gender.gender}&sort=${gender.sort}`, {
    method: 'GET',
  })
>>>>>>> laura
    .then((response) => response.json())
    .then((data) => {
      return data.movies;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
