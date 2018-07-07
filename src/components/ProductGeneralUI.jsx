import React from 'react';
import '../styles/components/ProductGeneralUI.css';

const ProductGeneralUI = (props) => {
  const { children } = props;
  return (
    <div className="ProductGeneralUI">
      <div className="ProductGeneralUI-images">
        <img src="img.jpg" />
      </div>
      <div className="ProductGeneralUI-details">
        <p>Small description</p>
        <p>100eur</p>
      </div>
      {children}
    </div>
  );
};

export default ProductGeneralUI;
