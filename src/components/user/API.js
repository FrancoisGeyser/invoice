import axios from 'axios';

export default class API {
  fetchUser = (user) => {
    const url = `https://api.github.com/users/${user}`;
    return axios
      .get(url)
      .then(({ data }) => data)
      .catch((error) => error);
  };
}
