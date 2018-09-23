import React from 'react';
import { connect } from 'react-redux';
import fetchProductsIfNeeded from '../actions/ProductActions';
import ProductList from '../components/ProductList';

class ProductListContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductsIfNeeded());
  }

  render() {
    const { products } = this.props;

    return <ProductList products={products.productsItems} isFetching={products.isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { isFetching, products } = state;

  return {
    products,
    isFetching,
  };
};

export default connect(mapStateToProps)(ProductListContainer);
