import * as actionTypes from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  types: [],
};

const typesState = (state = initialState, action) => {
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
    case actionTypes.DELETE_TYPE:
      return {
        ...state,
        types: {
          ...state.types,
          count: state.types.count - 1,
          items: state.types.items.filter((type) => type._id !== action.id),
        },
      };
    default:
      return state;
  }
};

export default typesState;
