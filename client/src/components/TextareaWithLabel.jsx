import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/components/TextareaWithLabel.css';
import { correctInputIcon, incorrectInputIcon } from '../icons';

const propTypes = {
  size: PropTypes.string,
  maxLength: PropTypes.number,
  regex: PropTypes.string,

  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  size: '',
  maxLength: 100,
  regex: '',
};

class TextareaWithLabel extends React.Component {
  static checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex) {
    return regex !== '' && text !== '' && !regex.test(text);
  }

  state = {
    text: '',
  };

  constructor(props) {
    super(props);

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

    this.props.onChange(event);
  }

  render() {
    const { label, placeholder, id, regex, size } = this.props;
    const { text } = this.state;

    let wrongInputClassName = '';
    if (TextareaWithLabel.checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex)) {
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
            value={text}
          />
          {TextareaWithLabel.checkIfTextIsEmptyAndCheckTextAgainstRegex(text, regex) && (
            <div className="fade-in">{incorrectInputIcon}</div>
          )}
          {regex !== '' && regex.test(text) && <div className="fade-in">{correctInputIcon}</div>}
        </div>
      </label>
    );
  }
}

TextareaWithLabel.propTypes = propTypes;
TextareaWithLabel.defaultProps = defaultProps;

export default TextareaWithLabel;
