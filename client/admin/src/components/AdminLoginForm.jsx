import React from 'react';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import Button from './Button';
import '../styles/admin/AdminLoginForm.css';

class AdminLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isLoading: false,
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleLogin() {
    this.setState({
      isLoading: true,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div className="AdminLoginForm">
        <h1>Prihláste sa do svojho účtu</h1>
        <div className="AdminLoginForm-inputFields">
          <TextareaWithLabel
            onChange={this.handleEmailChange}
            label="Email"
            placeholder="jantoth@gmail.com"
            id="email"
          />
          <PasswordWithLabel
            onChange={this.handlePasswordChange}
            type="login"
            label="Heslo"
            id="login-password"
          />
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
        <div className="AdminLoginForm-additionalLinks">
          <a href="forgot-password">Zabudnuté heslo?</a>
          <p className="AdminLoginForm-registrationLink">
            Ešte nemáte účet?
            <a href="register">Registrujte sa</a>
          </p>
        </div>
      </div>
    );
  }
}

export default AdminLoginForm;
