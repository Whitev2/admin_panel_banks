import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/User';
import { instanceReducer } from '../../entities/Instance';

export const store = configureStore({
  reducer: {
    user: userReducer,
    instance: instanceReducer,
  },
});
