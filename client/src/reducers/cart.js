import * as types from '../constants/ActionTypes';

const initialState = {
  cart: [],
  shouldAnimate: false,
};

const addProductToCart = (cart, action) => {
  return [
    ...cart,
    {
      id: action.id,
      quantity: action.quantity,
      name: action.name,
      totalItemPrice: action.totalItemPrice,
      selectedOptions: action.selectedOptions,
      image: action.image,
    },
  ];
};

const removeProductFromCart = (cart, action) => {
  // const productIndex = cart.findIndex((product) => product.id === action.id);
  // const products = cart.map((product) => product.id === action.id);
  // console.log(action);
  // if (productIndex === -1) {
  //   return cart;
  // }
  // console.log(action);

  // if (action.newQuantity === 0) {
  //   cart.splice(action.index, 1);
  //   console.log(cart);
  //   return cart;
  // }

  // const newCart = cart;
  // // newCart[productIndex].quantity = action.quantity;
  // return newCart;
  const newCart = cart.slice();
  newCart.splice(action.index, 1);
  return newCart;
};

const cartState = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        shouldAnimate: true,
        cart: addProductToCart(state.cart, action),
      };
    case types.REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        shouldAnimate: true,
        cart: removeProductFromCart(state.cart, action),
      };
    default:
      return state;
  }
};

export default cartState;
