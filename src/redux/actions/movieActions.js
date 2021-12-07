import * as constants from '../constants';
import movieService from '../../services/movieService';

const getAllMovieSuccess = (allMovies) => ({
  type: constants.GET_ALL_MOVIES,
  payload: allMovies,
});

const getAllUpComingMoviesSuccess = (movies) => ({
  type: constants.GET_ALL_UPCOMINGMOVIES,
  payload: movies,
});

export const getAllMovies = () => async (dispatch) => {
  try {
    const allMovies = await movieService.getAllMovies();
    dispatch(getAllMovieSuccess(allMovies));
  } catch (e) {
    // TODO Should dispatch an error action
  }
};
export const getAllUpComingMovies = () => async (dispatch) => {
  try {
    const allUpComingMovies = await movieService.getAllUpcomingMovies();
    dispatch(getAllUpComingMoviesSuccess(allUpComingMovies));
  } catch (err) {
    // TODO Should dispatch an error action
  }
};
export default getAllMovies;
