import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import axios from "axios";
import { Layout } from './Layout/Layout';
// const Layout = lazy(()=> import('./Layout/Layout.jsx'));
const SearchMovieList = lazy(()=> import ('../views/MoviePage'))
const NotFoundView = lazy(()=> import ('../views/NotFoundView'))
const TrendingMovies = lazy(()=> import ('../views/HomePage' /* webpackChunkName: "MoviesPage"*/))
const MovieView = lazy(()=> import ('../views/MovieView'))
const MovieCreditsView  = lazy(()=> import ('../views/MovieCreditsView'))
const MovieReviewsView = lazy(()=> import ('../views/MovieReviewsView'))


// import { SearchMovieList } from 'views/MoviePage';
// import { NotFoundView } from 'views/NotFoundView';
// import { TrendingMovies } from 'views/HomePage';
// import { MovieView } from 'views/MovieView';
// import { MovieCreditsView } from '../views/MovieCreditsView';
// import { MovieReviewsView } from '../views/MovieReviewsView';



export const App = () => {
  // let location = useLocation()
  // console.log(location)

  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
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
    </Suspense>
    </>
  );
};
