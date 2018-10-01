import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/ProductListGeneralUI.css';
import ProductCard from './ProductCard';

const propTypes = {
  isFetching: PropTypes.bool.isRequired,
  filteredProducts: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
  }).isRequired,
};

const defaultProps = {};

const ProductList = (props) => {
  const { filteredProducts, isFetching } = props;
  if (isFetching) {
    return <div>loading</div>;
  }

  const productCards =
    filteredProducts &&
    filteredProducts.map((product) => (
      <ProductCard
        key={product._id}
        id={product._id}
        name={product.name}
        price={product.price}
        titleImage={product.images[0]}
      />
    ));

  return (
    <ul className="ProductListGeneralUI">
      <h1>Zoznam produktov</h1>
      {productCards}
    </ul>
  );
};

ProductList.propTypes = propTypes;
ProductList.defaultProps = defaultProps;

export default ProductList;
