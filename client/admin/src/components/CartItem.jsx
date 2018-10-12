import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CartItem.css';
import { deleteIcon } from '../icons';

const propTypes = {
  name: PropTypes.string.isRequired,
  itemQuantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  selectedOptions: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }),
  onRemoveProductClick: PropTypes.func.isRequired,
};

const defaultProps = {
  selectedOptions: [],
};

class CartItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: '',
    };

    this.changeQuantity = this.changeQuantity.bind(this);
  }

  changeQuantity(event) {
    const { onRemoveProductClick } = this.props;

    this.setState({
      quantity: Number(event.target.value),
    });

    onRemoveProductClick(1, Number(event.target.value));
  }

  render() {
    const { quantity } = this.state;
    const {
      name,
      itemQuantity,
      price,
      type,
      image,
      selectedOptions,
      onRemoveProductClick,
    } = this.props;

    const options = selectedOptions.map((option) => (
      <div className="CartItem-options">
        <p>{option.name}: </p>
        <p> {option.value}</p>
      </div>
    ));

    return (
      <div className="CartItem">
        {image !== '' && <img src={image} alt="Obrázok produktu v košíku" />}
        <div>
          <p className="CartItem-name">{name}</p>
          {options}
        </div>
        <div className="CartItem-quantityAndDeleteContainer">
          {type !== 'readOnly' ? (
            <input
              id={`quantity-${name}`}
              type="number"
              onChange={this.changeQuantity}
              value={quantity || itemQuantity}
              min="1"
              max="10"
              className="CartItem-quantity"
            />
          ) : (
            <div className="CartItem-readOnlyQuantity">
              <p>Počet kusov:</p>
              <p>{itemQuantity}</p>
            </div>
          )}
          {type !== 'readOnly' && (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={onRemoveProductClick}
              onClick={onRemoveProductClick}
              className="CartItem-deleteIcon"
            >
              {deleteIcon}
            </div>
          )}
        </div>
        <p className="CartItem-price">
          {price}
          ,00 €
        </p>
      </div>
    );
  }
}

CartItem.propTypes = propTypes;
CartItem.defaultProps = defaultProps;

export default CartItem;
