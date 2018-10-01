import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/ProductCard.css';
import Button from './Button';

const propTypes = {
  name: PropTypes.string.isRequired,
  titleImage: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {};

const ProductCard = (props) => {
  const { name, titleImage, price, id } = props;

  return (
    <Link to={`/product/${id}`}>
      <div className="ProductCard">
        <img src={titleImage} alt={`Obrázok pre ${name}`} />
        <h1>{name}</h1>
        <div className="ProductCard-buttonAndPrice">
          <Button type="secondary" text="Zobraziť" />
          <p>{price} €</p>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = propTypes;
ProductCard.defaultProps = defaultProps;

export default ProductCard;
