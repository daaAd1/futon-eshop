import React from 'react';
import '../styles/components/CartItem.css';
import { deleteIcon } from '../icons';
import futon2 from '../img/futon8.jpeg';

class CartItem extends React.Component {
  state = {
    isOpen: false,
    quantity: '',
  };

  constructor(props) {
    super(props);

    this.toggleOpen = this.toggleOpen.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
  }

  toggleOpen() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  changeQuantity(event) {
    this.setState({
      quantity: Number(event.target.value),
    });
    this.props.onRemoveProductClick(1, Number(event.target.value));
  }

  render() {
    const { isOpen, quantity } = this.state;
    const {
      name,
      itemQuantity,
      id,
      price,
      type,
      image,
      selectedOptions,
      onRemoveProductClick,
    } = this.props;

    return (
      <div onClick={this.toggleOpen} className="CartItem">
        {image !== false && <img src={futon2} />}
        <p className={`CartItem-name`}>{name}</p>
        {type !== 'readOnly' ? (
          <input
            id={`quantity-${name}`}
            type="number"
            onChange={this.changeQuantity}
            value={quantity || itemQuantity}
            min="1"
            max="10"
          />
        ) : (
          <p>Počet kusov: {itemQuantity}</p>
        )}
        {type !== 'readOnly' && (
          <div onClick={onRemoveProductClick} className="CartItem-deleteIcon">
            {deleteIcon}
          </div>
        )}
        <p className="CartItem-price">
          {price}
          ,00 €
        </p>
      </div>
    );
  }
}

export default CartItem;
