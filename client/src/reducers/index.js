import { combineReducers } from 'redux';
import cartState from './cart';
import products from './products';

const rootReducer = combineReducers({ cartState, products });

export default rootReducer;
