import { connect } from 'react-redux';
import CartPage from '../components/CartPage';
import { removeProductFromCart } from '../actions/CartActions';

const mapStateToProps = (state) => {
  const { cartState } = state;
  const { cart } = cartState;

  return {
    cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onRemoveProductClick: (id, count) => dispatch(removeProductFromCart(id, count)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartPage);
