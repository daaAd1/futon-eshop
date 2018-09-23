import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../styles/components/ProductCard.css';
import Button from './Button';
import Product from './Product';

class ProductCard extends React.Component {
  render() {
    const { name, image, price } = this.props;

    return (
      <Link to="/product/5b983d38e13dd31d4b875e2b">
        <div className="ProductCard">
          <img src={image} />
          <h1>{name}</h1>
          <div className="ProductCard-buttonAndPrice">
            <Button type="secondary" text="Zobraziť" />
            <p>{price} €</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ProductCard;
