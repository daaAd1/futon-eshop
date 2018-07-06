import * as types from '../constants/ActionTypes';

export const addItemToCart = (item) => ({
  type: types.ADD_ITEM_TO_CART,
  item,
});

export const removeItemFromCart = (index) => ({
  type: types.REMOVE_ITEM_FROM_CART,
  index,
});
