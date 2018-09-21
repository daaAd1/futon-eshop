import React from 'react';
import { connect } from 'react-redux';
import AdminOrders from '../../components/admin/AdminOrders';
import fetchOrdersIfNeeded from '../../actions/OrderActions';

class OrdersContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchOrdersIfNeeded());
  }

  render() {
    const { orders } = this.props;

    return <AdminOrders orders={orders.orders} isFetching={orders.isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { isFetching, orders } = state;

  return {
    orders,
    isFetching,
  };
};

export default connect(mapStateToProps)(OrdersContainer);
