import React from 'react';
import { connect } from 'react-redux';
import fetchProductsIfNeeded from '../actions/ProductActions';
import ProductList from '../components/ProductList';

class ProductListContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchProductsIfNeeded());
  }

  getValuesFromQuery() {
    const { location } = this.props;
    const { search } = location || {};
    const defaultQuery = search;

    if (search !== undefined && search.length !== 0) {
      const queryNoQuestionMark = this.splitQueryWithQuestionMark(defaultQuery);
      const queryArrNoAmpersands = this.splitQueryWithAmpersands(queryNoQuestionMark);
      const queryNoEqualsSign = this.splitQueryArrWithEqualsSign(queryArrNoAmpersands);

      return this.getValuesFromQueryArr(queryNoEqualsSign);
    }
  }

  splitQueryWithQuestionMark(query) {
    return query.split('?')[1];
  }

  splitQueryWithAmpersands(query) {
    return query.split('&');
  }

  splitQueryArrWithEqualsSign(queryArr) {
    return queryArr.map((query) => query.split('='));
  }

  getValuesFromQueryArr(queryArr) {
    return queryArr.map((valuePair) => ({ [valuePair[0]]: valuePair[1].toUpperCase() }));
  }

  filterProducts(options) {
    const {
      products: {
        productsItems: { items },
      },
    } = this.props;

    if (options === '') {
      return items;
    }

    return items && items.filter((product) => product.category === options[0].category);
  }

  render() {
    const {
      products: { isFetching },
    } = this.props;

    const urlOptions = this.getValuesFromQuery() || '';
    const filteredProducts = this.filterProducts(urlOptions);
    console.log(filteredProducts);
    return <ProductList filteredProducts={filteredProducts} isFetching={isFetching} />;
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
