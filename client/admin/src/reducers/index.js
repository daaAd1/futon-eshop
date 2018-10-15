import { combineReducers } from 'redux';
import auth from './auth';
import ordersState from './orders';
import productsState from './products';
import typesState from './types';
import attributesState from './attributes';

const rootReducer = combineReducers({
  auth,
  ordersState,
  productsState,
  typesState,
  attributesState,
});

export default rootReducer;
