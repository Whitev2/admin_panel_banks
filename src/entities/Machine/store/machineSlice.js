import { createSlice } from '@reduxjs/toolkit';
import { getAll, create, getTrans, getErrors, getLogs } from './thunks.js';
import * as responseHanldler from './responseHandlers.js';

const initialState = {
  machines: [],
  machine: {},
  transactions: [],
  logs: [],
  errors: [],
  loading: false,
  error: '',
  errorTrans: '',
  errorErrors: '',
  errorLogs: '',
};

export const machineSlice = createSlice({
  name: 'machine',
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

    builder.addCase(getTrans.pending, responseHanldler.getTrans);
    builder.addCase(getTrans.fulfilled, responseHanldler.getTrans);
    builder.addCase(getTrans.rejected, responseHanldler.getTrans);

    builder.addCase(getLogs.pending, responseHanldler.getLogs);
    builder.addCase(getLogs.fulfilled, responseHanldler.getLogs);
    builder.addCase(getLogs.rejected, responseHanldler.getLogs);

    builder.addCase(getErrors.pending, responseHanldler.getErrors);
    builder.addCase(getErrors.fulfilled, responseHanldler.getErrors);
    builder.addCase(getErrors.rejected, responseHanldler.getErrors);
  },
});

export const { clearError, setError } = machineSlice.actions;

export default machineSlice.reducer;
