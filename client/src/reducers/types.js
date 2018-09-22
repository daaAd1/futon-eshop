import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  types: [],
};

const types = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_TYPES:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.RECEIVE_TYPES:
      return {
        ...state,
        isFetching: false,
        types: action.types,
      };
    default:
      return state;
  }
};

export default types;
