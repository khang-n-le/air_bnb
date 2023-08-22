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
    'Content-Type': 'multipart/form-data',

    tokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4',
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
