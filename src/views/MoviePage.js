import { useState, useEffect } from 'react';
import { getSearchMovie } from 'services/API';
import { SearchBar } from 'components/SearchBar/Searchbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function SearchMovieList() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  console.log(query);
  // useEffect(() => {
  //   getSearchMovie(query).then(result => {
  //     console.log(result)
  //     if (result.data.results.length === 0) {
  //       alert('no such movie');
  //     }
  //     setMovies(result.data.results);
  //   });
  // }, [query]);

  useEffect(() => {
    if (!location.search) {
      return;
    }
    setQuery(location.search.slice(7));
  }, [location.search]);

  const onSubmit = query => {
    setQuery(query);
    setMovies([]);
    getSearchMovie(query).then(result => {
      if (result.results.length === 0) {
        alert('no such movie');
      }
      setMovies(result.results);
    });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
