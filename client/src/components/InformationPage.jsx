import React from 'react';
import '../styles/components/InformationPage.css';

class InformationPage extends React.Component {
  render() {
    const { text } = this.props;
    const newText = text.replace(new RegExp('faq', 'g'), <strong>faq</strong>);

    return (
      <div className="InformationPage">
        <h1>Informations</h1>
        <p>{newText}</p>
      </div>
    );
  }
}

export default InformationPage;
