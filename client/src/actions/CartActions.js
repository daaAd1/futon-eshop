import * as types from '../constants/ActionTypes';

const addProductToCart = (id, quantity, name, totalItemPrice, selectedOptions, image) => ({
  type: types.ADD_PRODUCT_TO_CART,
  id,
  quantity,
  name,
  totalItemPrice,
  selectedOptions,
  image,
});

const removeProductFromCart = (index, newQuantity) => ({
  type: types.REMOVE_PRODUCT_FROM_CART,
  index,
  newQuantity,
});

const example = {
  cart: [
    {
      id: '1',
      quantity: '2',
      totalItemPrice: '199',
      additionalOptions: [
        { name: 'farba tkaniny', value: 'cervena' },
        { name: 'velkost futonu', value: '190x200cm' },
      ],
    },
  ],
  isHamburgerOpen: false,
  isCartOpen: false,
};

export { addProductToCart, removeProductFromCart };
