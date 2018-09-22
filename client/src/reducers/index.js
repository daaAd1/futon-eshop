import { combineReducers } from 'redux';
import router from './router';
import cart from './cart';
import orders from './orders';
import products from './products';
import types from './types';
import attributes from './attributes';

const rootReducer = combineReducers({ router, cart, orders, products, types, attributes });

export default rootReducer;
