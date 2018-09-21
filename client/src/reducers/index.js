import { combineReducers } from 'redux';
import router from './router';
import cart from './cart';
import orders from './orders';

const rootReducer = combineReducers({ router, cart, orders });

export default rootReducer;
