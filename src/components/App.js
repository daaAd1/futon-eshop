import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../styles/components/App.css';
import InputSelect from './InputSelect';
import Product from './Product';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputSelect />
        <Product productType="futon" />
      </div>
    );
  }
}

export default App;
