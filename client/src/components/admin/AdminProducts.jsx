import React from 'react';
import Button from '../Button';
import AdminOneProduct from './AdminOneProduct';
import AdminProductsFirstRow from './AdminProductsFirstRow';

import '../../styles/admin/AdminProducts.css';
import AdminNewProduct from './AdminNewProduct';

class AdminProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      isNewProductOpen: false,
      currentPage: 1,
      numOfProducts: 5,
      itemsPerPage: 10,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.toggleNewProductForm = this.toggleNewProductForm.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleExpandChange(newExpanded) {
    this.setState({
      expanded: newExpanded,
    });
  }

  toggleNewProductForm() {
    this.setState((prevState) => ({
      isNewProductOpen: !prevState.isNewProductOpen,
    }));
  }

  handlePreviousClick() {
    const { currentPage } = this.state;

    currentPage > 1
      ? this.setState({
          currentPage: currentPage - 1,
        })
      : null;
  }

  handleNextClick() {
    const { currentPage, numOfProducts, itemsPerPage } = this.state;

    currentPage < numOfProducts / itemsPerPage
      ? this.setState({
          currentPage: currentPage + 1,
        })
      : null;
  }

  render() {
    const { products, isFetching } = this.props;
    const { items } = products || {};
    const { expanded, isNewProductOpen, currentPage, numOfProducts, itemsPerPage } = this.state;
    if (!items) {
      return <div />;
    }
    const productRows = items.map((product, index) => {
      const rows = [];
      if (
        index + 1 <= currentPage * itemsPerPage &&
        index + 1 >= currentPage * itemsPerPage - (itemsPerPage - 1)
      ) {
        rows.push(
          <AdminOneProduct
            id={product._id}
            active={product.active}
            name={product.name}
            descShort={product.descShort}
            descLong={product.descLong}
            price={product.price}
            type={product.type}
            images={product.images}
            category={product.category}
            subCategory={product.subCategory}
            updateProduct={this.props.updateProduct}
          />,
        );
      }
      if (
        index + 1 === numOfProducts.toString() &&
        index + 1 <= currentPage * itemsPerPage &&
        index + 1 >= currentPage * itemsPerPage - (itemsPerPage - 1)
      ) {
        const numOfAdditionalRowsNeeded = currentPage * itemsPerPage - numOfProducts;
        for (
          let numOfEmptyRows = 0;
          numOfEmptyRows < numOfAdditionalRowsNeeded;
          numOfEmptyRows += 1
        ) {
          rows.push(<AdminOneProduct id="" name="" shortDesc="" longDesc="" price="" type="" />);
        }
      }
      return rows;
    });

    return (
      <div className="AdminProducts">
        <div className="AdminProducts-header">
          <h1>Produkty</h1>
          <Button onClick={this.toggleNewProductForm} text="Nový produkt" />
        </div>
        {isNewProductOpen && <AdminNewProduct createNewProduct={this.props.createNewProduct} />}
        <div className="AdminProducts-gridContainer">
          <AdminProductsFirstRow />
          {productRows}
          <div className="AdminProducts-navButtons">
            <Button type="secondary" onClick={this.handlePreviousClick} text="<-------------- " />
            <Button type="secondary" onClick={this.handleNextClick} text=" -------------->" />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProducts;
