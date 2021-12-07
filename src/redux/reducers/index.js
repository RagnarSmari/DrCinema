import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducers';
import upcommingMovies from './upcommingMovieReducer';

export default combineReducers({
  cinemas,
  movies,
  upcommingMovies,
});
