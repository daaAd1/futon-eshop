import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as routes from '../constants/routes';

const auth = {};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? <Component {...props} /> : <Redirect to={routes.LOGIN} />
    }
  />
);

export default PrivateRoute;
