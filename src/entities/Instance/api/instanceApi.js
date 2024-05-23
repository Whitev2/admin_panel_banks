import { httpClient } from '../../../app/configs/httpCondig';

export const getAll = async () => {
  return httpClient.get('/instance/list');
};
export const getOne = async (id) => {
  return httpClient.get(`/instance/info?instance_id=${id}`);
};
export const create = async (data) => {
  return httpClient.post('/instance/create', data);
};
export const update = async (data) => {
  return httpClient.put('/instance/update', data);
};
export const remove = async () => {
  return httpClient.delete('/instance/delete');
};
