// login

const getMoviesFromApi = (gender) => {
  console.log('Se están pidiendo las películas de la app');
  console.log(gender);
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(`http://localhost:4000/movies?gender=${gender}`, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      return data.movies.movies;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
