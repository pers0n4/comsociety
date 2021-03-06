import axios from 'axios';

import type { AxiosResponse } from 'axios';

const BASE_URL = process.env.REACT_APP_API;

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

export const Api = {
  textrank: <T>(data: string[]): Promise<AxiosResponse<T>> =>
    api.post('/data/', { data }, { timeout: 30000 }),
};
