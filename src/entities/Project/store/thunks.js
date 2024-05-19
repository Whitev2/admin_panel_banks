import { createAsyncThunk } from '@reduxjs/toolkit';
import * as instance from '../api/projectApi';

export const getAll = createAsyncThunk(
  'project/getAll',
  (data, { rejectWithValue }) => {
    try {
      return instance.getAll();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const create = createAsyncThunk(
  'project/create',
  (data, { rejectWithValue }) => {
    try {
      return instance.create(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getOne = createAsyncThunk(
  'project/getOne',
  (id, { rejectWithValue }) => {
    try {
      return instance.getOne(id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const update = createAsyncThunk(
  'project/update',
  (data, { rejectWithValue }) => {
    try {
      return instance.update(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
