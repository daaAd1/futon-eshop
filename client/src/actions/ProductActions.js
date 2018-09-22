import fetch from 'cross-fetch';
import * as types from '../constants/ActionTypes';
import * as urls from '../constants/ApiConstants';

const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS,
});

const receiveProducts = (json) => ({
  type: types.RECEIVE_PRODUCTS,
  products: json,
});

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(requestProducts());
    return fetch(`${urls.BASE_URL}/${urls.PRODUCTS_URL}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveProducts(json)));
  };
};

const shouldFetchProducts = (state) => {
  const { isFetching } = state;
  if (isFetching) {
    return false;
  }
  return true;
};

const fetchProductsIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchProducts(getState())) {
      return dispatch(fetchProducts());
    }
  };
};

export default fetchProductsIfNeeded;
