import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Button.css';
import { addToCartIcon, emptyCartIcon } from '../icons';

const propTypes = {
  text: PropTypes.string.isRequired,

  type: PropTypes.string, // primary, secondary, tertiary
  color: PropTypes.string, // red, blue, green, white
  round: PropTypes.string, // small-round, medium-round, big-round
  shop: PropTypes.string,
  disabled: PropTypes.bool, // true, false
};

const defaultProps = {
  type: '',
  color: '',
  round: '',
  shop: '',
  disabled: false,
};

const Button = (props) => {
  const { text, type, color, round, shop, disabled } = props;

  return (
    <div>
      {shop === 'add_to_cart' && (
        <button className={`Button ${type} ${round}`} disabled={disabled}>
          {addToCartIcon} {text}
        </button>
      )}
      {shop !== 'add_to_cart' && (
        <button className={`Button ${type} ${round}`} disabled={disabled}>
          {text}
        </button>
      )}
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
