import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/Button.css';

const propTypes = {
  text: PropTypes.string.isRequired,

  type: PropTypes.string, // primary, secondary, tertiary
  color: PropTypes.string, // red, blue, green, white
  round: PropTypes.string, // small-round, medium-round, big-round
  disabled: PropTypes.bool, // true, false
};

const defaultProps = {
  type: '',
  color: '',
  round: '',
  disabled: false,
};

const Button = (props) => {
  const { text, type, color, round, disabled } = props;
  let classNameType = `-${type}`;
  if (classNameType === '-') {
    classNameType = '';
  }

  return (
    <div>
      <button className={`Button ${color}${classNameType} ${round}`} disabled={disabled}>
        <svg width="20px" height="20px" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M11,9H13V6H16V4H13V1H11V4H8V6H11M7,18A2,2 0 0,0 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20A2,2 0 0,0 7,18M17,18A2,2 0 0,0 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20A2,2 0 0,0 17,18M7.17,14.75L7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.59 17.3,11.97L21.16,4.96L19.42,4H19.41L18.31,6L15.55,11H8.53L8.4,10.73L6.16,6L5.21,4L4.27,2H1V4H3L6.6,11.59L5.25,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42C7.29,15 7.17,14.89 7.17,14.75Z"
          />
        </svg>{' '}
        {text}
      </button>
    </div>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
