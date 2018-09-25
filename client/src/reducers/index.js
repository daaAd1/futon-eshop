import { combineReducers } from 'redux';
import cart from './cart';
import products from './products';
import admin from './admin/admin';
import auth from './auth';

const rootReducer = combineReducers({ cart, products, admin, auth });

export default rootReducer;
