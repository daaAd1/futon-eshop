import React, { Component } from 'react';
import '../styles/components/App.css';
import ProductGeneralUI from './ProductGeneralUI';
import HeaderMenu from './HeaderMenu';
import FooterMenu from './FooterMenu';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderMenu />
        <div className="App-container">
          <Form />
          <ProductGeneralUI />
        </div>
        <FooterMenu />
      </div>
    );
  }
}

export default App;
