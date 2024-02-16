import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.authorization = '';
};

export const singupRequest = async req => {
  const response = await instance.post('/users/signup', req);
  setToken(response.data.token);
  return response.data;
};

export const loginRequest = async req => {
  const response = await instance.post('/users/login', req);
  setToken(response.data.token);
  return response.data;
};

export const logoutRequest = async () => {
  const response = await instance.post('/users/logout');
  setToken();
  return response.data;
};

export const currentRequest = async token => {
  setToken(token);

  try {
    const response = await instance.get('/users/current');
    return response.data;
  } catch (error) {
    setToken();
    throw error;
  }
};

export default instance;
