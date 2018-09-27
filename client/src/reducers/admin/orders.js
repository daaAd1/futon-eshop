import * as types from '../../constants/ActionTypes';

const initialState = {
  isFetching: false,
  orders: [],
};

const ordersState = (state = initialState, action) => {
  switch (action.type) {
    case types.DELETE_ORDER:
      return {
        ...state,
        orders: {
          ...state.orders,
          items: state.orders.items.filter((order) => order._id !== action.id),
        },
      };
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

export default ordersState;
