import axios from 'axios';
import { useSelector } from 'react-redux';
import getToken from './tokenService';

const ENDPOINT = 'https://api.kvikmyndir.is/movies';
const UPCOMINGENDPOINT = 'http://api.kvikmyndir.is/upcoming';

const movieService = {
  // eslint-disable-next-line consistent-return
  getAllMovies: async () => {
    try {
      const token = await getToken();
      const res = await axios.get(ENDPOINT, {
        headers: {
          'x-access-token': token,
        },
      });
      return res.data;
    } catch (err) { console.log(err); }
  },

  // eslint-disable-next-line consistent-return
  getAllUpcomingMovies: async () => {
    try {
      const token = await getToken();
      const res = await axios.get(UPCOMINGENDPOINT, {
        headers: {
          'x-access-token': token,
        },
      });
      return res.data;
    } catch (err) { console.log(err); }
  },

  getMoviesByCinemaId: async (cinemaId, movies) => {
    const cinemaMovies = [];
    for (let i = 0; i < movies.length; i += 1) {
      const movieShows = movies[i].showtimes;
      for (let k = 0; k < movieShows.length; i += 1) {
        if (movieShows[k].cinema.id === cinemaId) {
          cinemaMovies.push(movies[i]);
        }
      }
    }
    console.log(`in service${cinemaMovies}`);
    return cinemaMovies;
  },
};

export default movieService;
