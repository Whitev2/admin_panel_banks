import machineReducer from './store/machineSlice';
import * as action from './store/machineSlice';
import { getAll, create, update, getOne, getTrans } from './store/thunks';

export { machineReducer, getAll, create, update, getOne, getTrans, action };
