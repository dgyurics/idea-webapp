import { combineReducers } from 'redux';
import product from './product';
import auth from './auth';
import contact from './contact'

export default combineReducers({
  auth,
  contact,
  product
});
