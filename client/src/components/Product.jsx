import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/components/ProductGeneralUI.css';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';
import Button from './Button';
import SelectWithLabel from './SelectWithLabel';
import futon from '../img/futon.jpeg';
import futon2 from '../img/futon2.jpeg';
import futon3 from '../img/futon3.jpeg';

class Product extends React.Component {
  state = {
    quantity: 1,
    totalPrice: 199,
    selectedOptions: [
      { name: 'Farba tkaniny', value: 'červená' },
      { name: 'Veľkost futonu', value: '190x200cm' },
    ],
  };

  constructor() {
    super();

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: Number(event.target.value),
    });
  }

  render() {
    const { quantity, totalPrice, selectedOptions } = this.state;
    const { productWithId, productId } = this.props;
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
              <SelectWithLabel
                id="farba"
                label="Farba"
                defaultOption={'červená'}
                options={['červená', 'modrá']}
              />
              <label className="ProductGeneralUI-numberOfItems" htmlFor="mnozstvo">
                Množstvo:
                <input
                  id="mnozstvo"
                  type="number"
                  value={quantity}
                  min={1}
                  max={10}
                  onChange={this.handleQuantityChange}
                />
              </label>
              <Button
                onClick={() =>
                  this.props.onAddToCartClick(productId, quantity, totalPrice, selectedOptions)
                }
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
  }
}

export default Product;
