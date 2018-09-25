import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminOrders from '../../components/admin/AdminOrders';
import fetchOrdersIfNeeded from '../../actions/OrderActions';

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
    const { ordersState } = this.props;
    const { orders, isFetching } = ordersState;

    return <AdminOrders orders={orders} isFetching={isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { admin } = state;
  const { ordersState } = admin;

  return {
    ordersState,
  };
};

OrdersContainer.propTypes = propTypes;
OrdersContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(OrdersContainer);
