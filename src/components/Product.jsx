import React from 'react';
import PropTypes from 'prop-types';
import Futon from './Futon';
import Sofa from './Sofa';
import Bed from './Bed';
import Accessory from './Accessory';

const propTypes = {
  productType: PropTypes.string.isRequired,
};

const defaultProps = {};

const Product = (props) => {
  const { productType } = props;

  return (
    <div>
      {productType === 'futon' && <Futon />}
      {productType === 'sofa' && <Sofa />}
      {productType === 'bed' && <Bed />}
      {productType === 'accessory' && <Accessory />}
    </div>
  );
};

PropTypes.propTypes = propTypes;
PropTypes.defaultProps = defaultProps;

export default Product;
