import { httpClient } from '../../../app/configs/httpCondig';

export const create = async (data) => {
  return httpClient.post('machine/create', data);
};

export const updateStatus = async (data) => {
  return httpClient.post('/machine/update/status', data);
};

export const updateState = async (data) => {
  return httpClient.post('/machine/update/state', data);
};

export const getAll = async (id) => {
  return httpClient.get(`/machine/list?instance_id=${id}`);
};

export const getAvailble = async () => {
  return httpClient.get('/machine/available');
};

export const createLog = async (data) => {
  return httpClient.post('machine/log/create', data);
};

export const getLogList = async (machine_id) => {
  return httpClient.get(`machine/log/list?machine_id=${machine_id}`);
};

export const getErrorList = async (machine_id) => {
  return httpClient.get(`machine/error/list?machine_id=${machine_id}`);
};

export const getTransactionList = async (machineId) => {
  return httpClient.get(`machine/transactions/list?machine_id=${machineId}`);
};
