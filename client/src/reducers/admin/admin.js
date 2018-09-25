import { combineReducers } from 'redux';
import ordersState from './orders';
import productsState from './products';
import typesState from './types';
import attributesState from './attributes';

const admin = combineReducers({ ordersState, productsState, typesState, attributesState });

export default admin;
