import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ImageUploader from 'react-images-upload';
import Button from '../Button';
import CartItem from '../CartItem';
import AdminOneProduct from './AdminOneProduct';
import AdminProductsFirstRow from './AdminProductsFirstRow';
import { deleteIconWhite } from '../../icons';
import '../../styles/admin/AdminProducts.css';

class AdminProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      isNewProductOpen: false,
      currentPage: 1,
      numOfProducts: 1,
      itemsPerPage: 5,
    };

    this.onDrop = this.onDrop.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.toggleNewProductForm = this.toggleNewProductForm.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  onDrop(images) {
    const joinedArray = [];
    const currentImages = this.state.images;

    images.forEach((newImg) => {
      let isDuplicate = false;
      if (currentImages.length > 0) {
        currentImages.forEach((currentImg) => {
          if (newImg.name === currentImg.name) {
            isDuplicate = true;
          }
        });
      }

      if (!isDuplicate) {
        joinedArray.push(newImg);
      }
    });

    this.setState({
      images: currentImages.concat(joinedArray),
    });
  }

  removeImage(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  handleExpandChange(newExpanded, index, event) {
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
    const data = [
      {
        id: '2',
        name: 'Jozef Korikov',
        email: 'jozefkorikov@email.com',
        telephone: '+421901901901',
        price: '199,00 €',
        type: 'postel jedna farba',
        category: 'postel',
        subCategory: 'latex',
        images: '2',
      },
    ];

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
            id={index}
            name={product.name}
            shortDesc={product.descShort}
            longDesc={product.descLong}
            price={product.price}
            type={product.type}
            category={product.category}
            subCategory={product.subCategory}
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
          <div className="AdminProducts-productInfo swing-in-top-bck">
            <div>
              <p>Názov</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Krátky popis</p>
              <TextareaAutosize value="" />
            </div>
            <div>
              <p>Dlhý popis</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Cena</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Typ</p>
              <TextareaAutosize />
            </div>
            <div>
              <p>Obrázky</p>
              <div className="AdminProducts-imageUpload">
                <ImageUploader
                  withIcon
                  buttonText="Nahrajte sem obrázky"
                  onChange={this.onDrop}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                />
                <h2>Nahrané súbory</h2>
                <ul className="AdminProducts-uploadedImages">
                  {this.state.images.map((img, index) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb{' '}
                      <Button onClick={() => this.removeImage(index)} text={deleteIconWhite} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="AdminProducts-saveButton">
              <p />
              <Button text="Vytvoriť produkt" />
            </div>
          </div>
        )}
        <div className="AdminProducts-gridContainer">
          <AdminProductsFirstRow />
          {productRows}
          <div className="AdminProducts-navButtons">
            <Button type="secondary" onClick={this.handlePreviousClick} text="< " />
            <Button type="secondary" onClick={this.handleNextClick} text=" >" />
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProducts;
