import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;
