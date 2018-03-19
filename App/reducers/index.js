import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import Reducer from './reducers.js';

const allReducers= combineReducers({
  UserDetails: Reducer,
  form: formReducer
});
export default allReducers;
