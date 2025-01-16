import { api_token } from './api.js';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${api_token}`,
  },
};

//---FETCH---
//영화 정보 가져오기
const fetchMovies = async function (url) {
  try {
    //fetch
    const response = await fetch(url, options);
    const json = await response.json();
    const data = json.results;

    return data;
  } catch (err) {
    console.error('error data', err);
  }
};

export default fetchMovies;
