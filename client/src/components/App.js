import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import '../styles/components/App.css';
import 'react-table/react-table.css';
import * as routes from '../constants/routes';
import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';
import OrderForm from './OrderForm';
import Home from './Home';
import CartPage from './CartPage';
import ShowRoom from './ShowRoom';
import InformationPage from './InformationPage';
import Product from './Product';
import ProductListContainer from '../containers/ProductListContainer';
import SingleProductContainer from '../containers/SingleProductContainer';
import CartPageContainer from '../containers/CartPageContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ScrollMemory />
          <div>
            <HeaderMenu />
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.PRODUCTS} component={ProductListContainer} />
            <Route exact path={routes.SINGLE_PRODUCT} component={SingleProductContainer} />
            <Route exact path={routes.CART} component={CartPageContainer} />
            <Route exact path={routes.CHECKOUT} component={() => <OrderForm />} />
            <Route exact path={routes.SHOWROOM} component={ShowRoom} />
            <Route exact path={routes.FAQ} component={() => <InformationPage text="faq" />} />
            <Route
              exact
              path={routes.CONTACT}
              component={() => <InformationPage text="Showroom" />}
            />
            <Route
              exact
              path={routes.SHIPPING}
              component={() => <InformationPage text="shipping" />}
            />
            <Route exact path={routes.TERMS} component={() => <InformationPage text="terms" />} />
            <FooterMenu />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
