import axios from 'axios';
import { BASE_URL } from '../resources/current';
const HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
  PATCH: 'PATCH',
};
const _axios = axios.create({
  baseURL: "http://pisteinnovation.com/irrigation-app/api/",
  withCredentials: false,
});
_axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

const getAxiosClient = () => _axios;

const HttpService = {
  HttpMethods,
  getAxiosClient,
};

export default HttpService;
