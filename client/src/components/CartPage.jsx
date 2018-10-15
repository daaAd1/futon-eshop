import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/CartPage.css';
import * as routes from '../constants/routes';
import CartItem from './CartItem';

const propTypes = {
  cart: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    totalItemPrice: PropTypes.string.isRequired,
    selectedOptions: PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onRemoveProductClick: PropTypes.func.isRequired,
};

const defaultProps = {};

class CartPage extends React.Component {
  render() {
    const { cart, onRemoveProductClick } = this.props;

    const cartItems = cart.map((product, index) => (
      <CartItem
        onRemoveProductClick={() => onRemoveProductClick(index, 0)}
        price={product.totalItemPrice}
        itemQuantity={product.quantity}
        selectedOptions={product.selectedOptions}
        name={product.name}
        id={product.id}
        image={product.image}
      />
    ));

    const totalPricesArray = cart.map((product) => product.totalItemPrice);
    const totalPrice = totalPricesArray.reduce((a, b) => a + b, 0);

    return (
      <div className="CartPage">
        <h1>Košík</h1>
        <div className="CartPage-items">
          {cartItems}
          <div className="CartPage-totalPrice">
            <p>Cena celkovo:</p>
            <p>
              {totalPrice}
              ,00 €
            </p>
          </div>
        </div>
        <div className="CartPage-linkCheckout">
          {cart.length > 0 ? (
            <Link onClick={this.closeCart} className="CartPage-link" to={routes.CHECKOUT}>
              Prejsť k objednávke
            </Link>
          ) : (
            <a className="CartPage-link Cart-linkDisabled" to={routes.CHECKOUT}>
              Prejsť k objednávke
            </a>
          )}
        </div>
      </div>
    );
  }
}

CartPage.propTypes = propTypes;
CartPage.defaultProps = defaultProps;

export default CartPage;
