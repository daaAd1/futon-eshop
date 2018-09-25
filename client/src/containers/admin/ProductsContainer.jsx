import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminProducts from '../../components/admin/AdminProducts';
import fetchProductsIfNeeded from '../../actions/ProductActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  productsState: PropTypes.shape({
    products: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class ProductsContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductsIfNeeded());
  }

  render() {
    const { productsState } = this.props;
    const { products, isFetching } = productsState;

    return <AdminProducts products={products} isFetching={isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { admin } = state;
  const { productsState } = admin;

  return {
    productsState,
  };
};

ProductsContainer.propTypes = propTypes;
ProductsContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(ProductsContainer);
