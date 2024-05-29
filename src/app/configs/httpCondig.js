import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'http://92.118.56.68',
  // withCredentials: true,
});

httpClient.interceptors.request.use(onRequest);
httpClient.interceptors.response.use(onResponseSuccess, onResponseError);

function onRequest(request) {
  const accessToken = localStorage.getItem('access_token');

  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return request;
}

function onResponseSuccess(res) {
  return res.data;
}

async function onResponseError(error) {
  const originalRequest = error.config;
  if (error.response.status !== 401) {
    throw error;
  }

  // try {
  throw error;
  // }
  // catch (error) {
  //   throw error;
  // }
}
