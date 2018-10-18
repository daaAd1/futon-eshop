import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminProducts from '../components/AdminProducts';
import { fetchProductsIfNeeded, updateProduct, createNewProduct } from '../actions/ProductActions';
import { fetchTypesIfNeeded } from '../actions/TypeActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  productsState: PropTypes.shape({
    products: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  typesState: PropTypes.shape({
    types: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
};

const defaultProps = {};

class ProductsContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductsIfNeeded());
    dispatch(fetchTypesIfNeeded());
  }

  render() {
    const { productsState, dispatch, typesState } = this.props;
    const { products, isFetching } = productsState;
    const { types } = typesState || {};

    return (
      <AdminProducts
        types={types}
        products={products}
        isFetching={isFetching}
        updateProduct={(body, id) => dispatch(updateProduct(body, id))}
        createNewProduct={(body) => dispatch(createNewProduct(body))}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { productsState, typesState } = state;

  return {
    productsState,
    typesState,
  };
};

ProductsContainer.propTypes = propTypes;
ProductsContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(ProductsContainer);
