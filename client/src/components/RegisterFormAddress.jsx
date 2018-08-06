import React from 'react';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import '../styles/components/RegisterFormAddress.css';

class RegisterFormAddress extends React.Component {
  render() {
    const nameRegularExpression = new RegExp('\\w\\w+');
    const emailRegularExpression = new RegExp('[^@]+@[^@]+\\.[^@]+');
    const pscRegularExpression = new RegExp('\\d{5}');

    return (
      <div className="RegisterFormAddress">
        <h1>Adresa</h1>
        <p className="RegisterForm-requiredFieldsNotice">*Povinné polia</p>

        <TextareaWithLabel
          regex={nameRegularExpression}
          label="Štát*"
          placeholder=""
          id="address-state"
          required
        />
        <TextareaWithLabel
          regex={nameRegularExpression}
          label="Mesto*"
          placeholder="Bratislava"
          id="address-city"
          required
        />

        <InputFieldsContainer flow="row" className="Form-inputFields">
          <TextareaWithLabel
            regex={emailRegularExpression}
            label="Názov a číslo ulice*"
            placeholder="Košická 2"
            id="register-address-street-number"
            required
          />
          <TextareaWithLabel
            regex={pscRegularExpression}
            label="PSČ*"
            placeholder="04001"
            id="register-psc"
            required
            size="third"
            maxLength={5}
          />
        </InputFieldsContainer>
      </div>
    );
  }
}

export default RegisterFormAddress;
