import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../widgets/LoginForm';

export const loginUser = createAsyncThunk('user/login', (data) => {
  return login(data);
});
