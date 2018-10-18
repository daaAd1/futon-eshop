import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from 'react-dropdown';
import ImageUploader from 'react-images-upload';
import '../styles/admin/AdminNewProduct.css';
import Button from './Button';
import SelectWithLabel from './SelectWithLabel';
import { deleteIconWhite } from '../icons';

const propTypes = {
  createNewProduct: PropTypes.func.isRequired,
  types: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {};

class AdminNewProduct extends React.Component {
  static isImgInArr(checkedImg, imgArr) {
    let isDuplicate = false;
    imgArr.forEach((img) => {
      if (img.name === checkedImg.name) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  static postNonDuplicateImgToArr(stateImages, imgArray) {
    const finalArr = [];
    imgArray.forEach((img) => {
      if (!AdminNewProduct.isImgInArr(img, stateImages)) {
        finalArr.push(img);
      }
    });
    return finalArr;
  }

  constructor() {
    super();

    this.state = {
      name: '',
      descShort: '',
      descLong: '',
      price: '',
      category: 'FUTON',
      subCategory: '',
      type: '',
      images: [],
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.removeImage = this.removeImage.bind(this);
    this.createNewProduct = this.createNewProduct.bind(this);
  }

  onDrop(imgArray) {
    const joinedArr = this.checkImageExistenceInState(imgArray);
    const { images } = this.state;

    this.setState({
      images: images.concat(joinedArr),
    });
  }

  checkImageExistenceInState(imgArray) {
    const { images } = this.state;
    const stateImages = images;

    return AdminNewProduct.postNonDuplicateImgToArr(stateImages, imgArray);
  }

  handleFieldChange(event) {
    const key = event.target.id;
    this.setState({ [key]: event.target.value });
  }

  handleSelectChange(value, key) {
    this.setState({ [key]: value });
  }

  removeImage(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  createNewProduct() {
    const { createNewProduct, types } = this.props;
    const { name, descShort, descLong, price, category, subCategory, type, images } = this.state;

    const selectedTypeId =
      types.find((item) => item.name === type) && types.find((item) => item.name === type)._id;

    const body = {};
    body.name = name;
    body.descShort = descShort;
    body.descLong = descLong;
    body.price = price;
    body.category = category;
    body.subCategory = subCategory;
    body.type = selectedTypeId;
    body.image = images;

    createNewProduct(body);
  }

  render() {
    const { types } = this.props;
    const { name, descShort, descLong, price, category, subCategory, type, images } = this.state;
    const typeOptions = types.map((item) => item.name);

    return (
      <React.Fragment>
        <div className="AdminProducts-productInfo AdminNewProduct swing-in-top-bck">
          <div>
            <p>Názov</p>
            <TextareaAutosize id="name" value={name} onChange={this.handleFieldChange} />
          </div>
          <div>
            <p>Krátky popis</p>
            <TextareaAutosize id="descShort" value={descShort} onChange={this.handleFieldChange} />
          </div>
          <div>
            <p>Dlhý popis</p>
            <TextareaAutosize id="descLong" value={descLong} onChange={this.handleFieldChange} />
          </div>
          <div>
            <p>Cena</p>
            <TextareaAutosize id="price" value={price} onChange={this.handleFieldChange} />
          </div>
          <div>
            <p>Kategória</p>
            <SelectWithLabel
              id="category"
              onChange={(select) => this.handleSelectChange(select.value, 'category')}
              value={category}
              defaultOption="FUTON"
              options={['FUTON', 'SOFA', 'BED', 'ADD-ON']}
            />
          </div>
          <div>
            <p>Sub kategória</p>
            <TextareaAutosize
              id="subCategory"
              value={subCategory}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="AdminOneProduct-dropdownRow">
            <p>Typ</p>
            <Dropdown
              value={type}
              placeholder="Vyberte možnosť"
              options={typeOptions.sort()}
              onChange={(select) => this.handleSelectChange(select.value, 'type')}
            />
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
                {images.map((img, index) => (
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
            <Button onClick={this.createNewProduct} text="Vytvoriť produkt" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

AdminNewProduct.propTypes = propTypes;
AdminNewProduct.defaultProps = defaultProps;

export default AdminNewProduct;
