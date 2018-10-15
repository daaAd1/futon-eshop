import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/PasswordWithLabel.css';
import { showPasswordIcon, hidePasswordIcon, correctInputIcon, incorrectInputIcon } from '../icons';

const propTypes = {
  type: PropTypes.string,
  originalPassword: PropTypes.string,

  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  type: 'login',
  originalPassword: '',
};

/*
NOTE: strength indicator code is split out so it is possible to animate every strength change
*/
let zxcvbn;
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

  componentDidMount() {
    if (this.props.type === 'registration') {
      zxcvbn = require('zxcvbn');
    }
  }

  togglePassword() {
    this.setState((prevState) => ({
      passwordShown: !prevState.passwordShown,
    }));
  }

  handlePasswordChange(event) {
    const password = event.target.value;

    let evaluation;
    if (zxcvbn !== undefined) {
      evaluation = zxcvbn(password);

      if (password.length < 6) {
        evaluation.score = 0;
      }
      this.setState({
        evaluation: evaluation.score,
      });
    }

    this.setState({
      password,
    });

    this.props.onChange(event);
  }

  render() {
    const { label, id, type, originalPassword } = this.props;
    const { password, evaluation, passwordShown } = this.state;
    const inputType = passwordShown ? 'text' : 'password';
    const passwordShowAnimation = passwordShown ? 'tracking-in-contract' : 'tracking-in-expand';
    const borderBottom = password !== '' && type === 'registration' ? '' : 'border-bottom';

    return (
      <label htmlFor={id} className="PasswordWithLabel">
        <p>
          {label}
          {type === 'registration' && <small> (min. 6 znakov)</small>}
        </p>
        <div>
          <input
            className={`${passwordShowAnimation} ${borderBottom}`}
            type={inputType}
            id={id}
            onChange={this.handlePasswordChange}
          />
          <div
            className="PasswordWithLabel-showPasswordIcon"
            onClick={this.togglePassword}
            onKeyDown={this.togglePassword}
            role="button"
            tabIndex={-1}
          >
            {passwordShown && hidePasswordIcon}
            {!passwordShown && showPasswordIcon}
          </div>

          {type === 'registration' &&
            password !== '' && (
              <div className="PasswordWithLabel-passwordState fade-in">
                {evaluation !== 0 ? correctInputIcon : incorrectInputIcon}
              </div>
            )}
          {type === 'repeat' &&
            password !== '' && (
              <div className="PasswordWithLabel-passwordState fade-in">
                {originalPassword !== '' &&
                  password !== '' &&
                  (originalPassword === password ? correctInputIcon : incorrectInputIcon)}
              </div>
            )}
        </div>
        {type === 'registration' &&
          password !== '' && (
            <div className={`PasswordWithLabel-strengthIndicator-${evaluation}`} />
          )}
        {type === 'registration' &&
          password !== '' &&
          (evaluation === 0 &&
            password.length > 5 && (
              <p className="PasswordWithLabel-redText">heslo je prílíš jednoduché</p>
            ))}
        {type === 'repeat' &&
          !(originalPassword === '' || password === '' || originalPassword === password) && (
            <p className="PasswordWithLabel-redText">heslá nie sú rovnaké</p>
          )}
      </label>
    );
  }
}

PasswordWithLabel.propTypes = propTypes;
PasswordWithLabel.defaultProps = defaultProps;

export default PasswordWithLabel;
