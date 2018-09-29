import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProductsIfNeeded } from '../actions/ProductActions';
import ProductList from '../components/ProductList';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.shape({
    productsList: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.object.isRequired,
  }).isRequired,
};

const defaultProps = {};

class ProductListContainer extends React.Component {
  static splitQueryWithQuestionMark(query) {
    return query.split('?')[1];
  }

  static splitQueryWithAmpersands(query) {
    return query.split('&');
  }

  static splitQueryArrWithEqualsSign(queryArr) {
    return queryArr.map((query) => query.split('='));
  }

  static putValuesToObj(queryArr) {
    const values = {};

    values.category =
      (queryArr && queryArr[0] && queryArr[0][1] && queryArr[0][1].toUpperCase()) || '';
    values.subCategory =
      (queryArr && queryArr[1] && queryArr[1][1] && queryArr[1][1].toUpperCase()) || '';

    return values;
  }

  static filterProducts(products, options) {
    const { items } = products;

    if (options === '') {
      return items;
    } else if (options.subCategory === '') {
      return items && items.filter((product) => product.category === options.category);
    }

    return (
      items &&
      items.filter(
        (product) =>
          product.category === options.category && product.subCategory === options.subCategory,
      )
    );
  }

  componentDidMount() {
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch(fetchProductsIfNeeded());
  }

  putValuesFromQueryToObj() {
    const { location } = this.props;
    const { search } = location || {};
    const defaultQuery = search;

    if (search !== undefined && search.length !== 0) {
      const queryNoQuestionMark = ProductListContainer.splitQueryWithQuestionMark(defaultQuery);
      const queryArrNoAmpersands = ProductListContainer.splitQueryWithAmpersands(
        queryNoQuestionMark,
      );
      const queryNoEqualsSign = ProductListContainer.splitQueryArrWithEqualsSign(
        queryArrNoAmpersands,
      );

      return ProductListContainer.putValuesToObj(queryNoEqualsSign);
    }

    return false;
  }

  render() {
    const { products } = this.props;
    const { productsList, isFetching } = products;

    const urlOptions = this.putValuesFromQueryToObj() || '';
    const filteredProducts = ProductListContainer.filterProducts(productsList, urlOptions);

    return <ProductList filteredProducts={filteredProducts} isFetching={isFetching} />;
  }
}

const mapStateToProps = (state) => {
  const { products } = state;

  return {
    products,
  };
};

ProductListContainer.propTypes = propTypes;
ProductListContainer.defaultProps = defaultProps;

export default connect(mapStateToProps)(ProductListContainer);
