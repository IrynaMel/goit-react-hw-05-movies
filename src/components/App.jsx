import { Routes, Route} from 'react-router-dom';
// import axios from "axios";
import { Layout } from './Layout/Layout';
import { SearchMovieList } from 'views/MoviePage';
import { NotFoundView } from 'views/NotFoundView';
import { TrendingMovies } from 'views/HomePage';
import { MovieView } from 'views/MovieView';
import { MovieCreditsView } from '../views/MovieCreditsView';
import { MovieReviewsView } from '../views/MovieReviewsView';

export const App = () => {
  // let location = useLocation()
  // console.log(location)

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element = {<TrendingMovies/>}/>
        <Route path="movies" element={<SearchMovieList />} />
        <Route path="movies/:movieId" element={<MovieView />} >
          <Route path = 'cast' element = {<MovieCreditsView/>}/>
          <Route path = 'reviews' element = {<MovieReviewsView/>}/>
        </Route>
      </Route>
      <Route path="*" element={<NotFoundView />} /> 
    </Routes>
    
  );
};
