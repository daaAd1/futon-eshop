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
      quantity: event.target.value,
    });
  }

  render() {
    const { isOpen, quantity } = this.state;
    const { name, itemQuantity, value } = this.props;

    return (
      <div onClick={this.toggleOpen} className="CartItem">
        <img src={futon2} />
        <p>{name}</p>
        <input
          id={`quantity-${name}`}
          type="number"
          onChange={this.changeQuantity}
          value={quantity || itemQuantity}
          min="1"
          max="10"
        />
        <div className="abc">{deleteIcon}</div>
      </div>
    );
  }
}

export default CartItem;
