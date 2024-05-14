import { httpClient } from '../../app/configs/httpCondig';

export const login = (credentials) => {
  return httpClient.post('/admin/login', credentials);
};
