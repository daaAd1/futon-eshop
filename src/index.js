import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles/main.css';
import Root from './components/Root';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* global document:false */

const store = createStore(rootReducer);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
