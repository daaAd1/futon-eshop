import React from 'react';
import '../styles/components/CheckInformationText.css';

class CheckInformationText extends React.Component {
  render() {
    const { label, text } = this.props;

    return (
      <div className="CheckInformationText">
        <p>{label}:</p>
        <p>{text}</p>
      </div>
    );
  }
}

export default CheckInformationText;
