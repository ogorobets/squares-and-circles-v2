import { combineReducers } from 'redux';
import shapes from './shapes';

const rootReducer = combineReducers({
  shapes
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
