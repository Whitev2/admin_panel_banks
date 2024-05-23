import instanceReducer from './store/instanceSlice';
import * as action from './store/instanceSlice';
import { getAll, create, update, getOne } from './store/thunks';

export { instanceReducer, getAll, create, update, getOne, action };
