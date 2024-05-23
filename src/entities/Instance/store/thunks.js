import { createAsyncThunk } from '@reduxjs/toolkit';
import * as instance from '../api/instanceApi';

export const getAll = createAsyncThunk(
  'instance/getAll',
  (data, { rejectWithValue }) => {
    try {
      return instance.getAll();
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const create = createAsyncThunk(
  'instance/create',
  (data, { rejectWithValue }) => {
    try {
      return instance.create(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const getOne = createAsyncThunk(
  'instance/getOne',
  (id, { rejectWithValue }) => {
    try {
      return instance.getOne(id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const update = createAsyncThunk(
  'instance/update',
  (data, { rejectWithValue }) => {
    try {
      return instance.update(data);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);
