import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './thunks';
import * as responseHanldler from './responseHandlers.js';

const initialState = {
  instancies: [],
  instance: null,
  loading: false,
  error: '',
};

export const instanceSlice = createSlice({
  name: 'instance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, responseHanldler.getAll);
    builder.addCase(getAll.fulfilled, responseHanldler.getAll);
    builder.addCase(getAll.rejected, responseHanldler.getAll);
  },
});

export const {} = instanceSlice.actions;

export default instanceSlice.reducer;
