import { combineReducers } from 'redux';
import cartState from './cart';
import products from './products';
import admin from './admin/admin';
import auth from './auth';

const rootReducer = combineReducers({ cartState, products, admin, auth });

export default rootReducer;
