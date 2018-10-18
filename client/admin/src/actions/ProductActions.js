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

const updateProduct = (body, id) => {
  return (dispatch) => {
    return fetch(`${urls.BASE_URL}/${urls.PRODUCTS_URL}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => dispatch(fetchProductsIfNeeded()));
  };
};

const createNewProduct = (body) => {
  return (dispatch) => {
    return fetch(`${urls.BASE_URL}/${urls.PRODUCTS_URL}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => dispatch(fetchProductsIfNeeded()));
  };
};

export { fetchProductsIfNeeded, updateProduct, createNewProduct };
