import { connect } from 'react-redux';
import OrderFormLastStep from '../components/OrderFormLastStep';

const mapStateToProps = (state) => {
  const { cartState } = state;
  const { cart } = cartState;

  return {
    cart,
  };
};

export default connect(mapStateToProps)(OrderFormLastStep);
