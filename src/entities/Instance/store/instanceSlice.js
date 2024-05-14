import { createSlice } from '@reduxjs/toolkit';
import { getAll } from './thunks';

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
    builder.addCase(getAll.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.loading = false;
      state.instancies = action.payload;
    });
    builder.addCase(getAll.rejected, (state) => {
      state.loading = false;
      state.error = 'Something went wrong....';
    });
  },
});

export const {} = instanceSlice.actions;

export default instanceSlice.reducer;
