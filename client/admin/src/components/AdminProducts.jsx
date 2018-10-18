import React from 'react';
import Button from './Button';
import AdminOneProduct from './AdminOneProduct';
import AdminProductsFirstRow from './AdminProductsFirstRow';
import '../styles/admin/AdminProducts.css';
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
    const { products, types, isFetching, createNewProduct } = this.props;
    const { items } = products || {};
    const typesItems = types.items;
    const { isNewProductOpen, currentPage, numOfProducts, itemsPerPage } = this.state;

    if (!items) {
      return (
        <div className="AdminProducts">
          <div className="AdminProducts-header">
            <h1>Produkty</h1>
          </div>
          <h2>loading</h2>
        </div>
      );
    }

    const productRows = items.map((product, index) => {
      const rows = [];
      if (
        index + 1 <= currentPage * itemsPerPage &&
        index + 1 >= currentPage * itemsPerPage - (itemsPerPage - 1)
      ) {
        const type =
          typesItems &&
          typesItems[typesItems.findIndex((type) => type._id === product.type)] &&
          typesItems[typesItems.findIndex((type) => type._id === product.type)].name;
        rows.push(
          <AdminOneProduct
            id={product._id}
            types={typesItems}
            active={product.active}
            name={product.name}
            descShort={product.descShort}
            descLong={product.descLong}
            price={product.price}
            type={type}
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
        {isNewProductOpen && (
          <AdminNewProduct types={typesItems} createNewProduct={createNewProduct} />
        )}
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
