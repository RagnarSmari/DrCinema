import { combineReducers } from 'redux';
import cinemas from './cinemaReducer';
import movies from './movieReducers';

export default combineReducers({
  cinemas,
  movies,
});
