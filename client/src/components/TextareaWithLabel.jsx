import React from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import '../styles/components/TextareaWithLabel.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {};

const TextareaWithLabel = (props) => {
  const { label, placeholder, id } = props;

  return (
    <label htmlFor={id} className="TextareaWithLabel">
      {label}
      <Textarea placeholder={placeholder} id={id} />
    </label>
  );
};

TextareaWithLabel.propTypes = propTypes;
TextareaWithLabel.defaultProps = defaultProps;

export default TextareaWithLabel;
