import { httpClient } from '../../../app/configs/httpCondig';

export const getAll = async () => {
  return httpClient.get('/project/list');
};
export const getOne = async (id) => {
  return httpClient.get(`/project/info?instance_id=${id}`);
};
export const create = async (data) => {
  return httpClient.post('/project/create', data);
};
export const update = async (data) => {
  return httpClient.put('/project/update', data);
};
export const remove = async () => {
  return httpClient.delete('/project/delete');
};
