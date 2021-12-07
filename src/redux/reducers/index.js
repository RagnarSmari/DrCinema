import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducers';
import upcomingMovies from './upcommingMovieReducer';

export default combineReducers({
  cinemas,
  movies,
  upcomingMovies,
});
