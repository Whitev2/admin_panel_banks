import { createAsyncThunk } from '@reduxjs/toolkit';
import * as instance from '../api/machineApi';

export const getAll = createAsyncThunk(
  'machine/getAll',
  (data, { rejectWithValue }) => {
    try {
      return instance.getAll();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const create = createAsyncThunk(
  'machine/create',
  (data, { rejectWithValue }) => {
    try {
      return instance.create(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getOne = createAsyncThunk(
  'machine/getOne',
  (id, { rejectWithValue }) => {
    try {
      return instance.getOne(id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const update = createAsyncThunk(
  'machine/update',
  (data, { rejectWithValue }) => {
    try {
      return instance.update(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
