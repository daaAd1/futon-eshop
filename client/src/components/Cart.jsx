import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Cart.css';
import * as routes from '../constants/routes';
import { emptyCartIcon } from '../icons';
import Button from './Button';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.closeCart = this.closeCart.bind(this);
  }

  toggleOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  closeCart() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isOpen } = this.state;
    const { numberOfItems, cart, onRemoveProductClick } = this.props;

    const isOpenClass = isOpen ? 'Cart-isOpen' : '';
    const cartItems = cart.map((product, index) => (
      <CartItem
        onRemoveProductClick={() => onRemoveProductClick(index, 0)}
        price={product.totalItemPrice}
        itemQuantity={product.quantity}
        name={product.name}
      />
    ));

    const totalPricesArray = cart.map((product) => product.totalItemPrice);
    const totalPrice = totalPricesArray.reduce((a, b) => a + b, 0);

    return (
      <div className={`HeaderMenu-rightContainerDropdownLink Cart ${isOpenClass}`}>
        <a role="button" tabIndex={0} onKeyDown={this.toggleOpen} onClick={this.toggleOpen}>
          {emptyCartIcon}
          <span className="Cart-numberOfItems">{numberOfItems}</span>
        </a>
        {isOpen && (
          <div className=" Cart-info">
            <div className="Cart-items">
              {cartItems}
              <div className="Cart-totalPrice">
                <p>Cena celkovo:</p>{' '}
                <p>
                  {totalPrice}
                  ,00 €
                </p>
              </div>
            </div>
            <div className="Cart-buttons">
              <Link
                onClick={this.closeCart}
                className="Cart-link Cart-linkTertiary"
                to={routes.CART}
              >
                Zobraziť košík
              </Link>
              <Link onClick={this.closeCart} className="Cart-link" to={routes.CHECKOUT}>
                Prejsť k objednávke
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Cart;
