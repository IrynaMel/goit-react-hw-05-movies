import { useState, useEffect } from 'react';
import { getMovie } from 'services/API';
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { MovieDetailNavigation } from 'components/MovieDetailsNavigation/MovieDetailsNavigation';
import { Button } from '@mui/material';
import { MovieCard } from 'components/MovieCard/MovieCard';



export const MovieView =()=>{
    const location = useLocation()
    const navigate = useNavigate();

 const [movie, setMovie] = useState(null)
 const { movieId } = useParams();



//   const onGoBack = () => {
//     navigate( location?.state?.from ?? '/')
//   };



 

 useEffect(()=>{
    getMovie(movieId)
    .then((data)=>setMovie(data));
   
}, [movieId])



return(
    <>
    <Button onClick={() => {
          navigate(location?.state?.from ?? '/');
        }} >Go back</Button>
    {movie && <> 
    <MovieCard movie = {movie}/>
    <MovieDetailNavigation/>
    <Outlet/>
   
    </>}
    </>
)

}