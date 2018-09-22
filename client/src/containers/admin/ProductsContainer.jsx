import React from 'react';
import { connect } from 'react-redux';
import AdminProducts from '../../components/admin/AdminProducts';
import fetchProductsIfNeeded from '../../actions/ProductActions';

class ProductsContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductsIfNeeded());
  }

  render() {
    const { products } = this.props;

    return <AdminProducts products={products.products} isFetching={products.isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { isFetching, products } = state;

  return {
    products,
    isFetching,
  };
};

export default connect(mapStateToProps)(ProductsContainer);
