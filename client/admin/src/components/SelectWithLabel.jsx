import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';
import '../styles/components/SelectWithLabel.css';

const propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultOption: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const defaultProps = {
  label: '',
  onChange: () => {},
};

const SelectWithLabel = (props) => {
  const { label, options, defaultOption, id, onChange } = props;

  return (
    <label htmlFor={id} className="SelectWithLabel">
      {label}
      <Dropdown
        options={options}
        value={defaultOption}
        onChange={onChange}
        placeholder="Select an option"
      />
    </label>
  );
};

SelectWithLabel.propTypes = propTypes;
SelectWithLabel.defaultProps = defaultProps;

export default SelectWithLabel;
