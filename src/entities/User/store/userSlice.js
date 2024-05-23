import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './thunks';

const initialState = {
  user: null,
  loading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
      state.error = 'Something went wrong....';
    });
  },
});

export const { logout, setUser } = userSlice.actions;

export default userSlice.reducer;
