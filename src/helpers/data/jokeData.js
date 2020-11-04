import axios from 'axios';

const api = 'https://official-joke-api.appspot.com/random_joke';

const getJokes = () => new Promise((resolve, reject) => {
  axios
    .get(api)
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => reject(error));
});

export default getJokes;
