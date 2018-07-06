import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';

const propTypes = {
  store: PropTypes.shape({
    items: PropTypes.array.isRequired,
  }).isRequired,
};

const defaultProps = {};

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

Root.propTypes = propTypes;
Root.defaultProps = defaultProps;

export default Root;
