import * as types from '../constants/ActionTypes';

const addProductToCart = (id, count) => ({
  type: types.ADD_PRODUCT_TO_CART,
  id,
  count,
});

const removeProductFromCart = (id, newCount) => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  id,
  newCount,
});

const example = {
  cart: [
    {
      id: '1',
      count: '2',
      price: '199',
      additionalOptions: [{ 'farba tkaniny': 'cervena' }, { 'velkost futonu': '190x200cm' }],
    },
  ],
  isHamburgerOpen: false,
  isCartOpen: false,
  route: '/',
};

export { addProductToCart, removeProductFromCart };
