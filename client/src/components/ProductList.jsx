import React from 'react';
import '../styles/components/ProductListGeneralUI.css';
import ProductCard from './ProductCard';
import futon from '../img/futon.jpeg';
import futon2 from '../img/futon8.jpeg';
import futon3 from '../img/futon7.jpeg';
import futon4 from '../img/futon4.jpeg';
import futon5 from '../img/futon5.jpeg';
import futon6 from '../img/futon6.jpeg';

const ProductList = (props) => {
  const { products, isFetching } = props;
  if (!products) {
    return <div>loading</div>;
  }
  const { items } = products && products;
  const productCards =
    items && items.map((product) => <ProductCard name={product.name} price={product.price} />);

  return (
    <ul className="ProductListGeneralUI">
      <h1>Zoznam produktov</h1>
      {productCards}
    </ul>
  );
};

export default ProductList;