import * as types from '../constants/ActionTypes';

const initialState = {
  cart: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      console.log('hi');
      return {
        ...state,
        cart: [...state.cart, { id: action.id, count: action.count }],
      };
    case types.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: [
          ...state.cart.slice(...state.cart.findIndex((product) => product.id === action.id), 1),
        ],
      };
    default:
      return state;
  }
};

export default cart;
