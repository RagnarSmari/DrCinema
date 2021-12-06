import axios from 'axios';
import getToken from './tokenService';

const ENDPOINT = 'https://api.kvikmyndir.is/theaters';

const cinemaService = {
  // eslint-disable-next-line consistent-return
  getAllCinemas: async () => {
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

};

export default cinemaService;
