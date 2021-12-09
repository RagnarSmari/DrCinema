import axios from 'axios';
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

  getMoviesByCinemaId: (cinemaId, movies) => {
    const cinemaMovies = [];
    movies.forEach((m) => {
      m.showtimes.forEach((s) => {
        if (s.cinema.id === cinemaId) {
          cinemaMovies.push(m);
        }
      });
    });
    return cinemaMovies;
  },
};

export default movieService;
