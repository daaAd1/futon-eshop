import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { ToastConsumer, ToastProvider, withToastManager } from 'react-toast-notifications';
import ScrollMemory from 'react-router-scroll-memory';
import '../styles/components/App.css';
import 'react-table/react-table.css';
import * as routes from '../constants/routes';
import AdminDashboard from './AdminDashboard';
import OrdersContainer from '../containers/OrdersContainer';
import ProductsContainer from '../containers/ProductsContainer';
import TypesContainer from '../containers/TypesContainer';
import AttributesContainer from '../containers/AttributesContainer';
import InformationContainer from '../containers/InformationContainer';
import Home from './Home';
import LoginPage from './LoginPage';
import ConnectivityListener from './ConnectivityListener';

const App = (props) => {
  return (
    <ToastProvider placement="bottom-right">
      <ConnectivityListener />
      <HashRouter>
        <React.Fragment>
          <ScrollMemory />
          <div>
            <div>
              <AdminDashboard />
              <Route exact path={routes.LOGIN} component={() => <LoginPage />} />
              <Route exact path={routes.ADMIN} component={() => <Home />} />
              <Route exact path={routes.ADMIN_ORDERS} component={() => <OrdersContainer />} />
              <Route exact path={routes.ADMIN_PRODUCTS} component={() => <ProductsContainer />} />
              <Route exact path={routes.ADMIN_TYPES} component={() => <TypesContainer />} />
              <Route
                exact
                path={routes.ADMIN_ATTRIBUTES}
                component={() => <AttributesContainer />}
              />
              <Route
                exact
                path={routes.ADMIN_INFORMATION}
                component={() => <InformationContainer />}
              />
            </div>
          </div>
        </React.Fragment>
      </HashRouter>
    </ToastProvider>
  );
};

export default App;
