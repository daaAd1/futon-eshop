import React, { Component } from 'react';
import '../styles/components/App.css';
import ProductListGeneralUI from './ProductListGeneralUI';
import ProductContainer from '../containers/ProductContainer';
import AdminLoginForm from './admin/AdminLoginForm';
import OrderForm from './OrderForm';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="App-container">
          <ProductListGeneralUI categoryName="Futony" />
          <AdminLoginForm />
          <OrderForm />
          <ProductContainer />
        </div>
      </div>
    );
  }
}

export default Home;
