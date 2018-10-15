import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import '../styles/components/App.css';
import 'react-table/react-table.css';
import * as routes from '../constants/routes';
import AdminDashboard from './AdminDashboard';
import OrdersContainer from '../containers/OrdersContainer';
import ProductsContainer from '../containers/ProductsContainer';
import TypesContainer from '../containers/TypesContainer';
import AttributesContainer from '../containers/AttributesContainer';
import InformationContainer from '../containers/InformationContainer';

class App extends Component {
  render() {
    const { isAuthentificated } = this.props;

    return (
      <HashRouter>
        <div>
          {isAuthentificated && (
            <div>
              <AdminDashboard />
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
          )}
        </div>
      </HashRouter>
    );
  }
}

export default App;
