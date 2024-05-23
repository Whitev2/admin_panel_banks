import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from '../../entities/User';
import { instanceReducer } from '../../entities/Instance';
import { machineReducer } from '../../entities/Machine';
import { projectReducer } from '../../entities/Project';

export const store = configureStore({
  reducer: {
    user: userReducer,
    instance: instanceReducer,
    machine: machineReducer,
    project: projectReducer,
  },
});
