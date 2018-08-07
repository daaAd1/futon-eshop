import React from 'react';
import '../styles/components/OrderFormPassword.css';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';

class OrderFormPassword extends React.Component {
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
      <div className="OrderFormPassword">
        <h1>Vytvorenie účtu</h1>
        <PasswordWithLabel
          label="Heslo*"
          id="register-password"
          type="registration"
          onChange={this.handlePasswordChange}
        />
        <PasswordWithLabel
          label="Potvrdenie hesla*"
          id="register-password-repeat"
          type="repeat"
          originalPassword={password}
          onChange={this.handleSecondPasswordChange}
        />
        <div className="OrderFormPassword-separatingContainer" />
        <div className="OrderFormPassword-noRegistration">
          <a href="#">Pokračujte bez vytvorenia účtu -></a>
        </div>
      </div>
    );
  }
}

export default OrderFormPassword;
