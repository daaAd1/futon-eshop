import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  attributes: [],
};

const attributes = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ATTRIBUTES:
      return {
        ...state,
        isFetching: true,
      };
    case types.RECEIVE_ATTRIBUTES:
      return {
        ...state,
        isFetching: false,
        attributes: action.attributes,
      };
    default:
      return state;
  }
};

export default attributes;
