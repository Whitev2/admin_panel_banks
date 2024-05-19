import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../widgets/Forms/LoginForm';

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const { access_token } = await login(data);

      if (access_token) {
        localStorage.setItem('access_token', access_token);
      }

      return access_token;
    } catch (e) {
      return rejectWithValue(e.data.message);
    }
  },
);
