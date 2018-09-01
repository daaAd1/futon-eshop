import React from 'react';
import '../styles/components/OrderFormPayment.css';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import { packageIcon, payIcon, deliveryIcon, creditCardIcon, personIcon } from '../icons';

class OrderFormPayment extends React.Component {
  state = {
    password: '',
    repeatPassword: '',
  };

  constructor(props) {
    super(props);

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSecondPasswordChange = this.handleSecondPasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSecondPasswordChange(event) {
    this.setState({
      repeatPassword: event.target.value,
    });
  }

  render() {
    const { password, repeatPassword } = this.state;
    const { payment, delivery } = this.props;

    return (
      <div className="OrderFormPayment">
        <h1>Spôsob platby a doručenia</h1>
        <form>
          <fieldset
            onChange={(event) => this.props.onChange('payment', event.target.value)}
            id="payment"
          >
            <legend>
              {creditCardIcon}
              Spôsob platby
            </legend>
            <p>
              <input
                checked={payment === 'Dobierka'}
                type="radio"
                name="platba"
                id="dobierkou"
                value="Dobierka"
              />
              <label htmlFor="dobierkou">
                {packageIcon}
                Dobierkou
              </label>
            </p>
            <p>
              <input
                checked={payment === 'Prevod'}
                type="radio"
                name="platba"
                id="prevodom"
                value="Prevod"
              />
              <label htmlFor="prevodom">
                {payIcon}
                Prevodom na účet
              </label>
            </p>
          </fieldset>
          <fieldset
            onChange={(event) => this.props.onChange('delivery', event.target.value)}
            id="delivery"
          >
            <legend>
              {deliveryIcon}
              Spôsob doručenia
            </legend>
            <p>
              <input
                checked={delivery === 'Toptrans'}
                type="radio"
                name="doprava"
                id="toptrans"
                value="Toptrans"
              />
              <label htmlFor="toptrans">
                {packageIcon}
                TOPTRANS +12,00 €
              </label>
            </p>
            <p>
              <input
                checked={delivery === 'Košice'}
                type="radio"
                name="doprava"
                id="kosice"
                value="Košice"
              />
              <label htmlFor="kosice">
                {personIcon}
                Doručenie v Košiciach
              </label>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default OrderFormPayment;
