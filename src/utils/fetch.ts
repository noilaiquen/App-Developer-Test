import axios from 'axios';
import {BASE_URL, STORAGE_KEY} from '../constants';
import {storage} from '../store/mmkvStorage';
import {showError} from './toast';

const unauthorizedCode = [401, 403];

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API Request interceptor
instance.interceptors.request.use(
  config => {
    const jwtToken = storage.getString(STORAGE_KEY.AUTH_TOKEN);
    if (jwtToken) {
      config.headers['authorization'] = `Bearer ${jwtToken}`;
    }

    console.log(JSON.stringify(config.url, null, 2));
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// API respone interceptor
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const {response} = error;
    const errorMessage = response.data.status_message ?? '';
    if (unauthorizedCode.includes(response?.status)) {
      //Handle logout here
    }
    showError(errorMessage);
    return Promise.reject(error);
  },
);

export const Fetch = instance;
