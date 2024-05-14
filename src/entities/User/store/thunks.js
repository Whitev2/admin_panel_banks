import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../widgets/LoginForm';

export const loginUser = createAsyncThunk('user/login', async (data) => {
  const { access_token } = await login(data);

  if (access_token) {
    localStorage.setItem('access_token', access_token);
  }

  return access_token;
});
