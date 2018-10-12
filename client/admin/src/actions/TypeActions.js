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

const deleteType = (id) => ({
  type: types.DELETE_TYPE,
  id,
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

const updateType = (body, id) => {
  return () => {
    return fetch(`${urls.BASE_URL}/${urls.TYPES_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => console.log('Success:', JSON.stringify(response)));
  };
};

const createNewType = (body) => {
  return () => {
    return fetch(`${urls.BASE_URL}/${urls.TYPES_URL}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => window.location.reload());
  };
};

const removeType = (id) => {
  return (dispatch) => {
    return fetch(`${urls.BASE_URL}/${urls.TYPES_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => dispatch(deleteType(id)));
  };
};

export { fetchTypesIfNeeded, createNewType, updateType, removeType };
