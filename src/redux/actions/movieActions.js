import * as constants from '../constants';
import movieService from '../../services/movieService';

const getAllMovieSuccess = (allMovies) => ({
  type: constants.GET_ALL_MOVIES,
  payload: allMovies,
});

const getAllMovies = () => async (dispatch) => {
  try {
    const allMovies = await movieService.getAllMovies();
    dispatch(getAllMovieSuccess(allMovies));
  } catch (e) {
    // TODO Should dispatch an error action
  }
};

export default getAllMovies;
