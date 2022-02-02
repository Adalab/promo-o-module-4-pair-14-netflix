// login

const getMoviesFromApi = (gender) => {
  console.log('Se están pidiendo las películas de la app');
  console.log(gender);
  return fetch(`http://localhost:4000/movies?gender=${gender.gender}&sort=${gender.sort}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      return data.movies;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi,
};

export default objToExport;
