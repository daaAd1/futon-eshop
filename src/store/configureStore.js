import { createStore, applyMiddleware } from 'redux';

export default function configureStore(initialState) {
  const store = createStore(initialState);

  return store;
}
