import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminOrders from '../components/AdminOrders';
import { fetchOrdersIfNeeded, removeOrder } from '../actions/OrderActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  ordersState: PropTypes.shape({
    orders: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class OrdersContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOrdersIfNeeded());
  }

  render() {
    const { ordersState, dispatch } = this.props;
    const { orders, isFetching } = ordersState;

    return (
      <AdminOrders
        orders={orders}
        isFetching={isFetching}
        removeOrderFromList={(id) => dispatch(removeOrder(id))}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { ordersState } = state;

  return {
    ordersState,
  };
};

OrdersContainer.propTypes = propTypes;
OrdersContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(OrdersContainer);
