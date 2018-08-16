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
        <fieldset className="OrderFormAddress-countryChooser" id="country">
          <legend>Štát*</legend>
          <p>
            <input checked type="radio" name="platba" id="slovensko" value="small" />
            <label for="slovensko">Slovensko</label>
          </p>
          <p>
            <input type="radio" name="platba" id="cesko" value="medium" />
            <label for="cesko">Česká republika</label>
          </p>
        </fieldset>
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
