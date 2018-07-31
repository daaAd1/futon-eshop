import React from 'react';
import '../styles/components/RegisterForm.css';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import Button from './Button';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const nameRegularExpression = new RegExp('\\w+\\s\\w+');
    const emailRegularExpresion = new RegExp('[^@]+@[^@]+\\.[^@]+');

    return (
      <div className="RegisterForm">
        <h1>Registrácia</h1>
        <p className="RegisterForm-requiredFieldsNotice">*Povinné polia</p>
        <div className="Form-inputFields">
          <TextareaWithLabel
            regex={nameRegularExpression}
            label="Meno a priezvisko*"
            placeholder="Ján Tóth"
            id="name"
            required
          />
          <TextareaWithLabel
            regex={emailRegularExpresion}
            label="Email*"
            placeholder="jantoth@gmail.com"
            id="register-email"
            required
          />
          <PasswordWithLabel strengthIndicator required label="Heslo*" id="create-password" />
        </div>

        <Button text="Vytvoriť účet" />
      </div>
    );
  }
}

export default RegisterForm;
