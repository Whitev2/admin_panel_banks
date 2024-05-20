import { httpClient } from '../../../app/configs/httpCondig';

export const getAll = async (id) => {
  return httpClient.get(`/machine/list?instance_id=${id}`);
};
export const getAvailble = async () => {
  return httpClient.get('/machine/available');
};

export const getOne = async (id) => {
  return httpClient.get(`/machine/info?instance_id=${id}`);
};

export const create = async (data) => {
  console.log(data);
  return httpClient.post('machine/create', data);
};

export const createLog = async (data) => {
  return httpClient.post('machinee/log/create', data);
};

export const update = async (data) => {
  return httpClient.put('/machine/update', data);
};

export const remove = async () => {
  return httpClient.delete('/machine/delete');
};
