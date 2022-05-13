import { getTrendingMovies } from 'services/API';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrendingMovies() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
