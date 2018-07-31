import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/components/TextareaWithLabel.css';
import { correctInputIcon, incorrectInputIcon } from '../icons';

const propTypes = {
  regex: PropTypes.string,
  required: PropTypes.bool,

  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  required: false,
};

class TextareaWithLabel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.handleTextareaChange = this.handleTextareaChange.bind(this);
  }

  handleTextareaChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex) {
    return regex !== undefined && text !== '' && !regex.test(text);
  }

  render() {
    const { label, placeholder, id, regex, required } = this.props;
    const { text } = this.state;

    let wrongInputClassName = '';
    if (this.checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex)) {
      wrongInputClassName = 'wrongInput';
    }

    return (
      <label htmlFor={id} className={`TextareaWithLabel ${wrongInputClassName}`}>
        {label}
        <div>
          <TextareaAutosize
            onChange={this.handleTextareaChange}
            type="password"
            placeholder={placeholder}
            id={id}
            required
          />
          {this.checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex) && (
            <div className="fade-in">{incorrectInputIcon}</div>
          )}
          {regex !== undefined &&
            regex.test(text) && <div className="fade-in">{correctInputIcon}</div>}
        </div>
      </label>
    );
  }
}

TextareaWithLabel.propTypes = propTypes;
TextareaWithLabel.defaultProps = defaultProps;

export default TextareaWithLabel;
