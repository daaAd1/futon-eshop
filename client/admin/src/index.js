import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '@babel/polyfill';
import 'normalize.css';
import './styles/main.css';
import './styles/animations.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-dropdown/style.css';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import AppContainer from './containers/AppContainer';

/* global document */

const { store, persistor } = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
