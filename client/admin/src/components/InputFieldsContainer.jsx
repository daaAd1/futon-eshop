import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/InputFieldsContainer.css';

const propTypes = {
  flow: PropTypes.string,
};

const defaultProps = {
  flow: '',
};

// const InputFieldsContainer = (children, flow) => {
//   return <div className={`InputFieldsContainer ${flow}`}>{children}</div>;
// };

class InputFieldsContainer extends React.Component {
  render() {
    return <div className={`InputFieldsContainer ${this.props.flow}`}>{this.props.children}</div>;
  }
}

InputFieldsContainer.propTypes = propTypes;
InputFieldsContainer.defaultProps = defaultProps;

export default InputFieldsContainer;
