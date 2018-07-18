import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import '../styles/components/Button.css';
import { addToCartIcon, emptyCartIcon } from '../icons';

const Buttons = styled('button')({
  minWidth: '64px',
  height: '36px',

  padding: '0px 16px',
  margin: '0',

  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',

  border: '0',
  outline: 'none',

  backgroundColor: '#eb4b3d',
  color: '#f5f5f5',

  webkitBoxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',

  position: 'relative',
  overflow: 'hidden',

  '&:hover': {
    backgroundColor: '#e82e1e',

    cursor: 'pointer',
  },

  '&:disabled': {
    fontWeight: '400',

    backgroundColor: 'lightgray',
    color: 'gray',
  },

  '&:disabled:focus': {
    cursor: 'initial',
    backgroundColor: 'lightgray',
    color: 'gray',
  },

  ' &:active': {
    boxShadow: '0 3px #757575',
    transform: 'translateY(2px)',
  },
});

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
