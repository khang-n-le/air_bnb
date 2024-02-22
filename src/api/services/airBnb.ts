import axios from 'axios';
import queryString from 'query-string';

const { CancelToken } = axios;
export const sourceCancel = CancelToken.source();

const axiosClient = axios.create({
  baseURL: 'https://airbnbnew.cybersoft.edu.vn/api',
  cancelToken: sourceCancel.token,

  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',

    tokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjI0LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMzM3NjAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzNTIzNjAwfQ.Y4r98sOezektJ3pcwJQL0l2d2jGgKiOD0K51MEFDbKE',
  },
  paramsSerializer: params => queryString.stringify(params),
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response: any) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  error => {
    throw error;
  }
);

export const updateTokenBearer = (token: string) => {
  axios.defaults.headers.common['token'] = token;
};

axiosClient.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem('account') as string)?.token;
  config.headers.token = token ? token : '';

  return config;
});

export const removeCurrentEntity = () => {
  // delete axiosClient.defaults.headers.common['token'];
};

export default axiosClient;
