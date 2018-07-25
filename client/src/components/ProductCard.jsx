import React from 'react';
import '../styles/components/ProductCard.css';
import Button from './Button';

class ProductCard extends React.Component {
  render() {
    const { name, image, price } = this.props;

    return (
      <div className="ProductCard">
        <img src={image} />
        <h1>{name}</h1>
        <div className="ProductCard-buttonAndPrice">
          <Button type="secondary" text="Zobraziť" />
          <p>{price} €</p>
        </div>
      </div>
    );
  }
}

export default ProductCard;
