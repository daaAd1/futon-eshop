import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AnimateOnChange from 'react-animate-on-change';
import ClickOutside from 'react-click-outside';
import '../styles/components/Cart.css';
import * as routes from '../constants/routes';
import { emptyCartIcon } from '../icons';
import CartItem from './CartItem';

const propTypes = {
  cart: PropTypes.shape({
    name: PropTypes.string.isRequired,
    totalItemPrice: PropTypes.number.isRequired,
    itemQuantity: PropTypes.number.isRequired,
  }).isRequired,
  onRemoveProductClick: PropTypes.func.isRequired,
};

const defaultProps = {};
class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      shouldAnimate: props.shouldAnimate,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
    this.closeCart = this.closeCart.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { shouldAnimate } = this.state;
    if (nextProps.shouldAnimate !== shouldAnimate) {
      this.setState({
        shouldAnimate: nextProps.shouldAnimate,
      });
    }
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
    const { isOpen, shouldAnimate } = this.state;
    const { cart, onRemoveProductClick } = this.props;

    const isOpenClass = isOpen ? 'Cart-isOpen' : '';
    const cartItems = cart.map((product, index) => {
      if (index >= cart.length - 3) {
        return (
          <CartItem
            onRemoveProductClick={() => onRemoveProductClick(index, 0)}
            price={product.totalItemPrice}
            itemQuantity={product.quantity}
            name={product.name}
            image={product.image}
          />
        );
      }
    });

    const totalPricesArray = cart.map((product) => product.totalItemPrice);
    const totalPrice = totalPricesArray.reduce((a, b) => a + b, 0);

    return (
      <ClickOutside onClickOutside={this.closeCart}>
        <div className={`HeaderMenu-rightContainerDropdownLink Cart ${isOpenClass}`}>
          <a role="button" tabIndex={0} onKeyDown={this.toggleOpen} onClick={this.toggleOpen}>
            {emptyCartIcon}
            <AnimateOnChange
              baseClassName="Cart-numberOfItems"
              animationClassName="rotate-scale-up"
              animate={shouldAnimate}
              onAnimationEnd={() => this.setState({ shouldAnimate: false })}
            >
              {cart.length}
            </AnimateOnChange>
          </a>
          {isOpen && (
            <div className=" Cart-info">
              <div className="Cart-items">
                {cartItems}
                <div className="Cart-totalPrice">
                  <p>Cena celkovo:</p>
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
                {cart.length > 0 ? (
                  <Link onClick={this.closeCart} className="Cart-link" to={routes.CHECKOUT}>
                    Prejsť k objednávke
                  </Link>
                ) : (
                  <a className="Cart-link Cart-linkDisabled" to={routes.CHECKOUT}>
                    Prejsť k objednávke
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </ClickOutside>
    );
  }
}

Cart.propTypes = propTypes;
Cart.defaultProps = defaultProps;

export default Cart;
