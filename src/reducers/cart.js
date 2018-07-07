import * as types from '../constants/ActionTypes';

const initialState = {
  items: [],
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      return {
        ...state,
        items: [...state.items, action.item],
      };

    case types.REMOVE_ITEM_FROM_CART:
      return state.map((items, index) => {
        if (index === action.index) {
          return {
            ...state,
            items: items.splice(index, 1),
          };
        }
        return state;
      });

    default:
      return state;
  }
};

export default cart;
