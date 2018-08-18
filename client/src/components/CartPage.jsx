import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/CartPage.css';
import * as routes from '../routes';
import CartItem from './CartItem';

class CartPage extends React.Component {
  render() {
    const { totalPrice } = this.props;

    return (
      <div className="CartPage">
        <h1>Košík</h1>
        <div className="CartPage-items">
          <CartItem price="99" itemQuantity="1" name="Matrac hriva-latex" />{' '}
          <CartItem price="199" itemQuantity="3" name="Matrac vlna-hriva-latex" />{' '}
          <CartItem price="299" itemQuantity="2" name="Bavlnený matrac s vrstvou kokosu a peny" />
          <div className="CartPage-totalPrice">
            <p>Cena celkovo:</p>{' '}
            <p>
              {totalPrice}
              ,00 €
            </p>
          </div>
        </div>
        <div className="CartPage-linkCheckout">
          <Link onClick={this.closeCart} className="CartPage-link" to={routes.CHECKOUT}>
            Prejsť k objednávke
          </Link>
        </div>
      </div>
    );
  }
}

export default CartPage;
