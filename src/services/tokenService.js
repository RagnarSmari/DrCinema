import axios from 'axios';

const ENDPOINT = 'https://api.kvikmyndir.is/authenticate';

// eslint-disable-next-line consistent-return
async function getToken() {
  try {
    const body = JSON.stringify({
      username: 'gustithrastar',
      password: 'gusticinema',
    });
    const res = await axios.post(ENDPOINT, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data.token;
  } catch (e) {
    console.log(e);
  }
}
export default getToken;
