import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '65248391dec78c4625c205b53ad0430c',
  page: 1,
  language: 'en-US',
};

export async function getTrendingMovies() {
  const { data } = await axios
    .get('/trending/movie/day')
    .then(data => data)
    .catch(error => console.log(error.message));
  return data;
}

export async function getSearchMovie(query) {
  const data = await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=4a5a1e8e9c9af768c9d74bb009ae596f&query=${query}`
    )
    .then(data => data)
    .catch(error => console.log(error.message));
  return data;
}

export async function getMovie(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}`)
    .then(data => data)
    .catch(error => console.log(error.message));
  return data;
}

export async function getCredits(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}/credits`)
    .then(data => data)
    .catch(error => console.log(error.message));
  return data;
}

export async function getReviews(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}/reviews`)
    .then(data => data)
    .catch(error => console.log(error.message));
  return data;
}
