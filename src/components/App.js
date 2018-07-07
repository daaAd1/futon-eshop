import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../styles/components/App.css';
<<<<<<< HEAD
import InputSelect from './InputSelect';
import Product from './Product';
=======
>>>>>>> refs/remotes/origin/master

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <InputSelect />
        <Product productType="futon" />
=======
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
>>>>>>> refs/remotes/origin/master
      </div>
    );
  }
}

export default App;
