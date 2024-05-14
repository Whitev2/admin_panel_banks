import { httpClient } from '../../../app/configs/httpCondig';

export const getAll = async () => {
  return httpClient.get('/instance/list');
};
export const getOne = async () => {
  return httpClient.get('/instance/info');
};
export const create = async () => {
  return httpClient.post('/instance/create');
};
export const update = async () => {
  return httpClient.put('/instance/update');
};
export const remove = async () => {
  return httpClient.delete('/instance/delete');
};
