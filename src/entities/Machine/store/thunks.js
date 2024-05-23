import { createAsyncThunk } from '@reduxjs/toolkit';
import * as machine from '../api/machineApi';

export const getAll = createAsyncThunk(
  'machine/getAll',
  (id, { rejectWithValue }) => {
    try {
      return machine.getAll(id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const create = createAsyncThunk(
  'machine/create',
  (data, { rejectWithValue }) => {
    try {
      return machine.create(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getOne = createAsyncThunk(
  'machine/getOne',
  (id, { rejectWithValue }) => {
    try {
      return machine.getOne(id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const update = createAsyncThunk(
  'machine/update',
  (data, { rejectWithValue }) => {
    try {
      return machine.update(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getTrans = createAsyncThunk(
  'machine/trans',
  (machineId, { rejectWithValue }) => {
    try {
      return machine.getTransactionList(machineId);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getLogs = createAsyncThunk(
  'machine/logs',
  (machineId, { rejectWithValue }) => {
    try {
      return machine.getLogList(machineId);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getErrors = createAsyncThunk(
  'machine/errors',
  (machineId, { rejectWithValue }) => {
    try {
      return machine.getErrorList(machineId);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
