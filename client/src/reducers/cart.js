import * as types from '../constants/ActionTypes';

const initialState = {
  cart: [],
};

const addProductToCart = (cart, action) => {
  const productIndex = cart.findIndex((product) => product.id === action.id);
  if (productIndex === -1) {
    return [cart, { id: action.id, count: action.count }];
  }

  const newCart = cart;
  newCart[productIndex].count += action.count;
  return newCart;
};

const removeProductFromCart = (cart, action) => {
  const productIndex = cart.findIndex((product) => product.id === action.id);
  if (productIndex === -1) {
    return cart;
  }

  if (action.newCount === 0) {
    return [cart.slice(productIndex, 1)];
  }

  const newCart = cart;
  newCart[productIndex].count = action.newCount;
  return newCart;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart: addProductToCart(state.cart, action),
      };
    case types.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart: removeProductFromCart(state.cart, action),
      };
    default:
      return state;
  }
};

export default cart;
