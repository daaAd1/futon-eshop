import React from 'react';
import '../styles/components/RegisterFormPassword.css';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';

class RegisterFormPassword extends React.Component {
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
      <div className="RegisterFormPassword">
        <h1>Vytvorenie účtu</h1>
        <PasswordWithLabel
          label="Heslo*"
          placeholder=""
          id="register-password"
          required
          strengthIndicator
          onChange={this.handlePasswordChange}
        />
        <PasswordWithLabel
          label="Potvrdenie hesla*"
          placeholder=""
          id="register-password-repeat"
          required
          repeatPassword
          arePasswordsSame={password === '' || repeatPassword === '' || password === repeatPassword}
          onChange={this.handleSecondPasswordChange}
        />
        <div className="RegisterFormPassword-noRegistration">
          <a href="#">Pokračujte bez vytvorenia účtu -></a>
        </div>
      </div>
    );
  }
}

export default RegisterFormPassword;
