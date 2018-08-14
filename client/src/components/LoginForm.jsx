import React from 'react';
import '../styles/components/LoginForm.css';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import SelectWithLabel from './SelectWithLabel';
import Button from './Button';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoading: true,
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="LoginForm">
        <h1>Prihláste sa do svojho účtu</h1>
        <div className="LoginForm-inputFields">
          <TextareaWithLabel label="Email" placeholder="jantoth@gmail.com" id="email" />
          <PasswordWithLabel type="login" label="Heslo" id="login-password" onChange={() => {}} />
        </div>
        {isLoading && (
          <Button
            className="tracking-in-expand-slower"
            disabled
            text={
              <div class="lds-ring">
                <div />
                <div />
                <div />
                <div />
              </div>
            }
            onClick={this.handleLogin}
          />
        )}
        {!isLoading && <Button text="Prihlásiť sa" onClick={this.handleLogin} />}
        <div className="LoginForm-additionalLinks">
          <a href="forgot-password">Zabudnuté heslo?</a>
          <p className="LoginForm-registrationLink">
            Ešte nemáte účet?
            <a href="register">Registrujte sa</a>
          </p>
        </div>
      </div>
    );
  }
}

export default LoginForm;
