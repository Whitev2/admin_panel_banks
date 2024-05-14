import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/User';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
