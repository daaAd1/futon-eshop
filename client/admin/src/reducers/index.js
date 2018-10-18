import { combineReducers } from 'redux';
import auth from './auth';
import ordersState from './orders';
import productsState from './products';
import typesState from './types';
import attributesState from './attributes';
import informationsState from './info';

const rootReducer = combineReducers({
  auth,
  ordersState,
  productsState,
  typesState,
  attributesState,
  informationsState,
});

export default rootReducer;
