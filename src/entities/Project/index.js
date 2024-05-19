import projectReducer from './store/projectSlice';
import * as action from './store/projectSlice';
import { getAll, create, update, getOne } from './store/thunks';

export { projectReducer, getAll, create, update, getOne, action };
