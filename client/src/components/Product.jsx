import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/components/ProductGeneralUI.css';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
import Button from './Button';
import futon from '../img/futon.jpeg';
import futon2 from '../img/futon2.jpeg';
import futon3 from '../img/futon3.jpeg';

const Product = (props) => {
  const { productWithId, productId } = props;
  const { name, price, descShort, descLong } = productWithId || {};

  const images = [
    {
      original: futon,
      thumbnail: futon,
    },
    {
      original: futon2,
      thumbnail: futon2,
    },
    {
      original: futon3,
      thumbnail: futon3,
    },
  ];

  return (
    <div className="ProductGeneralUI">
      <h1 className="ProductGeneralUI-heading">{name}</h1>
      <div className="ProductGeneralUI-mainContent">
        <div className="ProductGeneralUI-images">
          <ImageGallery items={images} showPlayButton={false} slideDuration={0} />
        </div>
        <div className="ProductGeneralUI-details">
          <p className="ProductGeneralUI-description">{descShort}</p>
          <div className="ProductGeneralUI-cartDetails">
            <p className="ProductGeneralUI-price">{price} €</p>
            <label className="ProductGeneralUI-numberOfItems" htmlFor="mnozstvo">
              Množstvo:
              <input id="mnozstvo" type="number" value="1" min="1" max="10" />
            </label>
            <Button
              onClick={() => props.onAddToCartClick(1, 3)}
              text="Pridať do košíka"
              shop="add_to_cart"
            />
          </div>
        </div>
      </div>
      <div className="ProductGeneralUI-longDescription">
        <h2>Popis produktu</h2>
        <p>{ReactHtmlParser(descLong)}</p>
      </div>
    </div>
  );
};

export default Product;
