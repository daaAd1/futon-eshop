import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/components/TextareaWithLabel.css';
import { correctInputIcon, incorrectInputIcon } from '../icons';

const propTypes = {
  regex: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.string,
  maxLength: PropTypes.number,

  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  required: false,
  size: '',
  maxLength: 100,
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
    const text = event.target.value;
    const { maxLength } = this.props;

    if (text.length <= maxLength) {
      this.setState({
        text,
      });
    }
  }

  checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex) {
    return regex !== undefined && text !== '' && !regex.test(text);
  }

  render() {
    const { label, placeholder, id, regex, required, size } = this.props;
    const { text } = this.state;

    let wrongInputClassName = '';
    if (this.checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex)) {
      wrongInputClassName = 'wrongInput';
    }

    return (
      <label htmlFor={id} className={`TextareaWithLabel ${size} ${wrongInputClassName}`}>
        {label}
        <div>
          <TextareaAutosize
            onChange={this.handleTextareaChange}
            placeholder={placeholder}
            id={id}
            required
            value={text}
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
