import * as constants from '../constants';
import movieService from '../../services/movieService';

function compare(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
}

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
    const sortedMovies = allMovies.sort(compare);
    dispatch(getAllMovieSuccess(sortedMovies));
  } catch (e) {
    // TODO Should dispatch an error action
  }
};
export const getAllUpComingMovies = () => async (dispatch) => {
  try {
    const allUpComingMovies = await movieService.getAllUpcomingMovies();
    const sortedMovies = allUpComingMovies.sort(compare);
    dispatch(getAllUpComingMoviesSuccess(sortedMovies));
  } catch (err) {
    // TODO Should dispatch an error action
  }
};
export default getAllMovies;
