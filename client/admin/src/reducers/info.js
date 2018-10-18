import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  informations: [],
};

const informationsState = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_INFORMATIONS:
      return {
        ...state,
        isFetching: true,
      };
    case types.RECEIVE_INFORMATIONS:
      return {
        ...state,
        isFetching: false,
        informations: action.informations,
      };
    default:
      return state;
  }
};

export default informationsState;
