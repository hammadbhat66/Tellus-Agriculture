import { combineReducers } from 'redux';
import AuthSlice from './auth';

const CombinedReducers = combineReducers({
  auth: AuthSlice,
});
export default CombinedReducers;
