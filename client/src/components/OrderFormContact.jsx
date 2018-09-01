import React from 'react';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import '../styles/components/OrderFormContact.css';

class OrderFormContact extends React.Component {
  render() {
    const nameRegularExpression = new RegExp('\\w\\w+');
    const emailRegularExpresion = new RegExp('[^@]+@[^@]+\\.[^@]+');
    const { firstName, lastName, email, phone } = this.props;

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
            value={firstName}
            onChange={(value) => this.props.onChange('firstName', value)}
          />
          <TextareaWithLabel
            regex={nameRegularExpression}
            label="Priezvisko*"
            placeholder="Tóth"
            id="surname"
            value={lastName}
            size="half"
            onChange={(value) => this.props.onChange('lastName', value)}
          />
        </InputFieldsContainer>
        <TextareaWithLabel
          regex={emailRegularExpresion}
          label="Email*"
          value={email}
          placeholder="jantoth@gmail.com"
          id="register-email"
          onChange={(value) => this.props.onChange('email', value)}
        />
        <TextareaWithLabel
          regex={emailRegularExpresion}
          label="Tel. číslo*"
          value={phone}
          placeholder="+421 90 909 090"
          id="register-telephone"
          onChange={(value) => this.props.onChange('phone', value)}
        />
      </div>
    );
  }
}

export default OrderFormContact;
