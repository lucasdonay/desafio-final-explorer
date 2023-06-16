import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-9l6k.onrender.com',
});
