import fetch from 'cross-fetch';
import * as types from '../constants/ActionTypes';
import * as urls from '../constants/ApiConstants';

const requestTypes = () => ({
  type: types.REQUEST_TYPES,
});

const receiveTypes = (json) => ({
  type: types.RECEIVE_TYPES,
  types: json,
});

const fetchTypes = () => {
  return (dispatch) => {
    dispatch(requestTypes());
    return fetch(`${urls.BASE_URL}/${urls.TYPES_URL}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveTypes(json)));
  };
};

const shouldFetchTypes = (state) => {
  const { isFetching } = state;
  if (isFetching) {
    return false;
  }
  return true;
};

const fetchTypesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchTypes(getState())) {
      return dispatch(fetchTypes());
    }
  };
};

export default fetchTypesIfNeeded;
