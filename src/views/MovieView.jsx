import { useState, useEffect } from 'react';
import { getMovie } from 'services/API';
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MovieDetailNavigation } from 'components/MovieDetailsNavigation/MovieDetailsNavigation';



export const MovieView =()=>{
    const location = useLocation()
    const navigate = useNavigate();

 const [movie, setMovie] = useState(null)
 const { movieId } = useParams();



  const onGoBack = () => {
    if (location.search === '') {
        navigate('/');
        return;
      }
      navigate(location.state.from);
  };



 

 useEffect(()=>{
    getMovie(movieId)
    .then((data)=>setMovie(data));
   
}, [movieId])



return(
    <>
    <button onClick={onGoBack}>Go back</button>
    {movie && <>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
    alt ={movie.title}
    onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80";
      }}/>
      <div>{movie.title}({movie.release_date.slice(0,4)}) </div>
      <p>User score: {movie.vote_average*10}% </p>
      <p>overview: {movie.overview}</p>
      <p>Genres: {movie.genres.map((genra)=>(<li key={genra.id}>{genra.name}</li>))}</p>
    <MovieDetailNavigation/>
    <Outlet/>
   
    </>}
    </>
)

}