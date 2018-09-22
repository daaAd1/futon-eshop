import fetch from 'cross-fetch';
import * as types from '../constants/ActionTypes';
import * as urls from '../constants/ApiConstants';

const requestAttributes = () => ({
  type: types.REQUEST_ATTRIBUTES,
});

const receiveAttributes = (json) => ({
  type: types.RECEIVE_ATTRIBUTES,
  attributes: json,
});

const fetchAttributes = () => {
  return (dispatch) => {
    dispatch(requestAttributes());
    return fetch(`${urls.BASE_URL}/${urls.ATTRIBUTES_URL}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveAttributes(json)));
  };
};

const shouldFetchAttributes = (state) => {
  const { isFetching } = state;
  if (isFetching) {
    return false;
  }
  return true;
};

const fetchAttributesIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchAttributes(getState())) {
      return dispatch(fetchAttributes());
    }
  };
};

export default fetchAttributesIfNeeded;
