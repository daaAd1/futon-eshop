import fetch from 'cross-fetch';
import * as types from '../constants/ActionTypes';
import * as urls from '../constants/ApiConstants';

const requestInformations = () => ({
  type: types.REQUEST_INFORMATIONS,
});

const receiveInformations = (json) => ({
  type: types.RECEIVE_INFORMATIONS,
  attributes: json,
});

const fetchInformations = () => {
  return (dispatch) => {
    dispatch(requestInformations());
    return fetch(`${urls.BASE_URL}/${urls.INFORMATIONS_URL}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveInformations(json)));
  };
};

const shouldFetchInformations = (state) => {
  const { isFetching } = state;
  if (isFetching) {
    return false;
  }
  return true;
};

const fetchInformationsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchInformations(getState())) {
      return dispatch(fetchInformations());
    }
  };
};

const updateInformations = (body) => {
  return () => {
    return fetch(`${urls.BASE_URL}/${urls.INFORMATIONS_URL}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => console.log('Success:', JSON.stringify(response)));
  };
};

export { fetchInformationsIfNeeded, updateInformations };
