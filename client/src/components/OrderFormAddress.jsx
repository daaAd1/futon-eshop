import React from 'react';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import '../styles/components/OrderFormAddress.css';

class OrderFormAddress extends React.Component {
  render() {
    const nameRegularExpression = new RegExp('\\w\\w+');
    const emailRegularExpression = new RegExp('[^@]+@[^@]+\\.[^@]+');
    const pscRegularExpression = new RegExp('\\d{5}');

    return (
      <div className="OrderFormAddress">
        <h1>Adresa</h1>
        <p className="OrderForm-requiredFieldsNotice">*Povinné polia</p>
        <TextareaWithLabel
          regex={nameRegularExpression}
          label="Štát*"
          placeholder=""
          id="address-state"
        />
        <TextareaWithLabel
          regex={nameRegularExpression}
          label="Mesto*"
          placeholder="Bratislava"
          id="address-city"
        />
        <InputFieldsContainer flow="row" className="Form-inputFields">
          <TextareaWithLabel
            regex={emailRegularExpression}
            label="Názov a číslo ulice*"
            placeholder="Košická 2"
            id="register-address-street-number"
          />
          <TextareaWithLabel
            regex={pscRegularExpression}
            label="PSČ*"
            placeholder="04001"
            id="register-psc"
            size="third"
            maxLength={5}
          />
        </InputFieldsContainer>
      </div>
    );
  }
}

export default OrderFormAddress;
