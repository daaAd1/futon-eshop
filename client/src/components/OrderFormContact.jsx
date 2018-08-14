import React from 'react';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import '../styles/components/OrderFormContact.css';

class OrderFormContact extends React.Component {
  render() {
    const nameRegularExpression = new RegExp('\\w\\w+');
    const emailRegularExpresion = new RegExp('[^@]+@[^@]+\\.[^@]+');

    return (
      <div className="OrderFormContact">
        <h1>Kontaktné informácie</h1>
        <p className="OrderForm-requiredFieldsNotice">*Povinné polia</p>
        <InputFieldsContainer flow="row" className="Form-inputFields   ">
          <TextareaWithLabel
            regex={nameRegularExpression}
            label="Meno*"
            placeholder="Ján"
            id="name"
            size="half"
          />
          <TextareaWithLabel
            regex={nameRegularExpression}
            label="Priezvisko*"
            placeholder="Tóth"
            id="surname"
            size="half"
          />
        </InputFieldsContainer>
        <TextareaWithLabel
          regex={emailRegularExpresion}
          label="Email*"
          placeholder="jantoth@gmail.com"
          id="register-email"
        />
        <TextareaWithLabel
          regex={emailRegularExpresion}
          label="Tel. číslo*"
          placeholder="+421 90 909 090"
          id="register-telephone"
        />
      </div>
    );
  }
}

export default OrderFormContact;
