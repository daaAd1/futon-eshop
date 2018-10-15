import fetch from 'cross-fetch';
import * as types from '../constants/ActionTypes';
import * as urls from '../constants/ApiConstants';

const requestOrders = () => ({
  type: types.REQUEST_ORDERS,
});

const receiveOrders = (json) => ({
  type: types.RECEIVE_ORDERS,
  orders: json,
});

const deleteOrder = (id) => ({
  type: types.DELETE_ORDER,
  id,
});

const fetchOrders = () => {
  return (dispatch) => {
    dispatch(requestOrders());
    return fetch(`${urls.BASE_URL}/${urls.ORDERS_URL}`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveOrders(json)));
  };
};

const shouldFetchOrders = (state) => {
  const { isFetching } = state;
  if (isFetching) {
    return false;
  }
  return true;
};

const fetchOrdersIfNeeded = () => {
  return (dispatch, getState) => {
    if (shouldFetchOrders(getState())) {
      return dispatch(fetchOrders());
    }
  };
};

const removeOrder = (id) => {
  return (dispatch) => {
    return fetch(`${urls.BASE_URL}/${urls.ORDERS_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => dispatch(deleteOrder(id)));
  };
};

export { fetchOrdersIfNeeded, removeOrder };
