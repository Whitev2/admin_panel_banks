import { createAsyncThunk } from '@reduxjs/toolkit';
import * as instance from '../api/instanceApi';

export const getAll = createAsyncThunk('instance/getAll', () => {
  return instance.getAll();
});
