import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Cart.css';
import * as routes from '../routes';
import { emptyCartIcon } from '../icons';
import Button from './Button';
import CartItem from './CartItem';

class Cart extends React.Component {
  state = {
    isOpen: false,
  };

  constructor(props) {
    super(props);

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
    const { numberOfItems } = this.props;

    const isOpenClass = isOpen ? 'Cart-isOpen' : '';

    return (
      <div className={`HeaderMenu-rightContainerDropdownLink Cart ${isOpenClass}`}>
        <a onClick={this.toggleOpen}>
          {emptyCartIcon}
          <span className="Cart-numberOfItems">{numberOfItems}</span>
        </a>
        {isOpen && (
          <div className=" Cart-info">
            <div className="Cart-items">
              <CartItem itemQuantity="1" name="Matrac hriva-latex" />{' '}
              <CartItem itemQuantity="3" name="Matrac vlna-hriva-latex" />{' '}
              <CartItem itemQuantity="2" name="Bavlnený matrac s vrstvou kokosu a peny" />
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
