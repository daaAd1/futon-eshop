import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { removeProductFromCart } from '../actions/CartActions';

const mapStateToProps = (state) => {
  const { cartState } = state;
  const { cart, shouldAnimate } = cartState;

  return {
    cart,
    shouldAnimate,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveProductClick: (id, count) => dispatch(removeProductFromCart(id, count)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
