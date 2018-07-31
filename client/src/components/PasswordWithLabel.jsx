import React from 'react';
import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import '../styles/components/PasswordWithLabel.css';
import { showPasswordIcon, hidePasswordIcon, correctInputIcon, incorrectInputIcon } from '../icons';

const propTypes = {
  strengthIndicator: PropTypes.bool,

  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  strengthIndicator: false,
};

/*
NOTE: strength indicator code is split out so it is possible to animate every strength change
*/

class PasswordWithLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      evaluation: 0,
      passwordShown: false,
    };

    this.togglePassword = this.togglePassword.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  togglePassword() {
    this.setState((prevState) => ({
      passwordShown: !prevState.passwordShown,
    }));
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    const evaluation = zxcvbn(password);
    if (password.length < 6) {
      evaluation.score = 0;
    }

    this.setState({
      password,
      evaluation: evaluation.score,
    });
  }

  render() {
    const { label, placeholder, strengthIndicator, id } = this.props;
    const { password, evaluation, passwordShown } = this.state;
    const inputType = passwordShown ? 'text' : 'password';
    const passwordShowAnimation = passwordShown ? 'tracking-in-contract' : 'tracking-in-expand';
    const borderBottom = password !== '' && strengthIndicator ? '' : 'border-bottom';

    return (
      <label htmlFor={id} className="PasswordWithLabel">
        <p>
          {label}
          {strengthIndicator && <small> (min. 6 znakov)</small>}
        </p>
        <div>
          <input
            className={`${passwordShowAnimation} ${borderBottom}`}
            type={inputType}
            placeholder={placeholder}
            id={id}
            onChange={this.handlePasswordChange}
          />
          {passwordShown && (
            <div
              className="PasswordWithLabel-showPasswordIcon"
              onClick={this.togglePassword}
              onKeyDown={this.togglePassword}
              role="button"
              tabIndex={0}
            >
              {hidePasswordIcon}
            </div>
          )}
          {!passwordShown && (
            <div
              className="PasswordWithLabel-showPasswordIcon"
              onClick={this.togglePassword}
              onKeyDown={this.togglePassword}
              role="button"
              tabIndex={0}
            >
              {showPasswordIcon}
            </div>
          )}
          {password !== '' && (
            <div className="PasswordWithLabel-passwordState">
              {evaluation !== 0 ? correctInputIcon : incorrectInputIcon}
            </div>
          )}
        </div>
        {strengthIndicator &&
          password !== '' &&
          evaluation === 0 && <div className={`PasswordWithLabel-strengthIndicator-0`} />}
        {strengthIndicator &&
          password !== '' &&
          evaluation === 1 && <div className={`PasswordWithLabel-strengthIndicator-1`} />}
        {strengthIndicator &&
          password !== '' &&
          evaluation === 2 && <div className={`PasswordWithLabel-strengthIndicator-2`} />}
        {strengthIndicator &&
          password !== '' &&
          evaluation === 3 && <div className={`PasswordWithLabel-strengthIndicator-3`} />}
        {strengthIndicator &&
          password !== '' &&
          evaluation === 4 && <div className={`PasswordWithLabel-strengthIndicator-4`} />}
        {evaluation === 0 &&
          password !== '' &&
          password.length > 5 && (
            <p className="PasswordWithLabel-redText">heslo je prílíš jednoduché</p>
          )}
      </label>
    );
  }
}

PasswordWithLabel.propTypes = propTypes;
PasswordWithLabel.defaultProps = defaultProps;

export default PasswordWithLabel;
