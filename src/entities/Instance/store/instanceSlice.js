import { createSlice } from '@reduxjs/toolkit';
import { getAll, create, update, getOne } from './thunks';
import * as responseHanldler from './responseHandlers.js';

const initialState = {
  instancies: [],
  instance: {},
  loading: false,
  error: '',
};

export const instanceSlice = createSlice({
  name: 'instance',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = '';
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, responseHanldler.getAll);
    builder.addCase(getAll.fulfilled, responseHanldler.getAll);
    builder.addCase(getAll.rejected, responseHanldler.getAll);

    builder.addCase(create.pending, responseHanldler.create);
    builder.addCase(create.fulfilled, responseHanldler.create);
    builder.addCase(create.rejected, responseHanldler.create);

    builder.addCase(getOne.pending, responseHanldler.getOne);
    builder.addCase(getOne.fulfilled, responseHanldler.getOne);
    builder.addCase(getOne.rejected, responseHanldler.getOne);

    builder.addCase(update.pending, responseHanldler.update);
    builder.addCase(update.fulfilled, responseHanldler.update);
    builder.addCase(update.rejected, responseHanldler.update);
  },
});

export const { clearError, setError } = instanceSlice.actions;

export default instanceSlice.reducer;
