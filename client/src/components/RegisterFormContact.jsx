import React from 'react';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import '../styles/components/RegisterFormContact.css';

class RegisterFormContact extends React.Component {
  componentWillUnmount() {}

  render() {
    const nameRegularExpression = new RegExp('\\w\\w+');
    const emailRegularExpresion = new RegExp('[^@]+@[^@]+\\.[^@]+');

    return (
      <div className="RegisterFormContact">
        <h1>Kontaktné informácie</h1>
        <p className="RegisterForm-requiredFieldsNotice">*Povinné polia</p>

        <InputFieldsContainer flow="row" className="Form-inputFields   ">
          <TextareaWithLabel
            regex={nameRegularExpression}
            label="Meno*"
            placeholder="Ján"
            id="name"
            required
            size="half"
          />
          <TextareaWithLabel
            regex={nameRegularExpression}
            label="Priezvisko*"
            placeholder="Tóth"
            id="surname"
            required
            size="half"
          />
        </InputFieldsContainer>
        <TextareaWithLabel
          regex={emailRegularExpresion}
          label="Email*"
          placeholder="jantoth@gmail.com"
          id="register-email"
          required
        />
        <TextareaWithLabel
          regex={emailRegularExpresion}
          label="Tel. číslo*"
          placeholder="+421 90 909 090"
          id="register-telephone"
          required
        />
      </div>
    );
  }
}

export default RegisterFormContact;
