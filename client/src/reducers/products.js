import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  productsList: [],
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };
    case types.RECEIVE_PRODUCTS:
      return {
        ...state,
        isFetching: false,
        productsList: action.products,
      };
    default:
      return state;
  }
};

export default products;
