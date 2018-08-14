import React from 'react';
import '../styles/components/OrderFormPayment.css';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import { packageIcon, payIcon, deliveryIcon, creditCardIcon } from '../icons';

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

    return (
      <div className="OrderFormPayment">
        <h1>Spôsob platby a doručenia</h1>
        <form>
          <fieldset id="payment">
            <legend>{creditCardIcon}Spôsob platby</legend>
            <p>
              <input checked type="radio" name="platba" id="dobierkou" value="small" />
              <label for="dobierkou">{packageIcon}Dobierkou</label>
            </p>
            <p>
              <input type="radio" name="platba" id="prevodom" value="medium" />
              <label for="prevodom">{payIcon}Prevodom na účet</label>
            </p>
          </fieldset>
          <fieldset id="delivery">
            <legend>{deliveryIcon}Spôsob doručenia</legend>
            <p className="OrderFormPayment-longRadioButton">
              <input checked type="radio" name="doprava" id="doprava" value="small" />
              <label for="doprava">{packageIcon}TOPTRANS +12,00 €</label>
            </p>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default OrderFormPayment;
