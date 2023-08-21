import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://airbnbnew.cybersoft.edu.vn/api',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
    tokenCybersoft:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4',
  },
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
  axiosClient.defaults.headers.common['token'] = token;
};

export const removeCurrentEntity = () => {
  // delete axiosClient.defaults.headers.common['token'];
};

export default axiosClient;
