import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  orders: [],
};

const orders = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ORDERS:
      return {
        ...state,
        isFetching: true,
      };
    case types.RECEIVE_ORDERS:
      return {
        ...state,
        isFetching: false,
        orders: action.orders,
      };
    default:
      return state;
  }
};

export default orders;
