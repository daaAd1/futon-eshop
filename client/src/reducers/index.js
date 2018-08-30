import { combineReducers } from 'redux';
import router from './router';
import cart from './cart';

const rootReducer = combineReducers({ router, cart });

export default rootReducer;
