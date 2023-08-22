import axios from 'axios';
import queryString from 'query-string';

import { env } from 'env';
import axiosClient from './airBnb';

const { CancelToken } = axios;
export const sourceCancel = CancelToken.source();

// upload service
const uploadService = axios.create({
  baseURL: 'https://airbnbnew.cybersoft.edu.vn/api',
  cancelToken: sourceCancel.token,
  headers: {
    accept: 'application/json',
    'Content-type': 'multipart/form-data',
  },

  paramsSerializer: params => queryString.stringify(params),
});

uploadService.interceptors.response.use(
  response => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    // Handle errors
    throw error;
  }
);

axiosClient.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('account') as string)?.token;
  config.headers.token = token ? token : '';

  return config;
});

export default uploadService;
