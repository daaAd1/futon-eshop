import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ImageUploader from 'react-images-upload';
import Dropdown from 'react-dropdown';
import SelectWithLabel from './SelectWithLabel';
import Button from './Button';
import { chevronDownIcon, chevronUpIcon, fullCircleIcon, emptyCircleIcon } from '../icons';
import '../styles/admin/AdminOneProduct.css';

class AdminOneProduct extends React.Component {
  constructor(props) {
    super(props);
    const {
      id,
      active,
      name,
      descShort,
      descLong,
      price,
      category,
      subCategory,
      type,
      images,
    } = props;
    this.state = {
      id,
      active,
      name,
      descShort,
      descLong,
      price,
      category,
      subCategory,
      type,
      images,
      newImages: [],
      isExpanded: false,
    };

    this.removeImage = this.removeImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }

  removeImage(index) {
    const newState = this.state;
    newState.newImages.splice(index, 1);
    this.setState(newState);
  }

  addImage(imgArray) {
    const joinedArray = [];
    const { newImages } = this.state;

    imgArray.forEach((newImg) => {
      let isDuplicate = false;
      if (newImages.length > 0) {
        newImages.forEach((currentImg) => {
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
      newImages: newImages.concat(joinedArray),
    });
  }

  removeImageFromExisting(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  handleFieldChange(event) {
    const key = event.target.id;
    this.setState({ [key]: event.target.value });
  }

  handleSelectChange(value, key) {
    this.setState({ [key]: value });
  }

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  handleActiveChange() {
    this.setState((prevState) => ({
      active: !prevState.active,
    }));
  }

  updateProduct() {
    const { updateProduct } = this.props;
    const {
      id,
      name,
      descShort,
      descLong,
      price,
      category,
      subCategory,
      type,
      images,
      active,
    } = this.state;

    const body = {};
    body.name = name;
    body.descShort = descShort;
    body.descLong = descLong;
    body.price = price;
    body.category = category;
    body.subCategory = subCategory;
    body.type = type;
    body.images = images;
    body.active = active;

    updateProduct(body, id);
  }

  render() {
    const {
      isExpanded,
      active,
      id,
      name,
      descShort,
      descLong,
      price,
      type,
      category,
      subCategory,
      images,
      newImages,
    } = this.state;

    const productActive = active
      ? 'color-change-reverse'
      : 'AdminOneProduct-propertiesInactive color-change ';

    return (
      <div className="AdminOneProduct">
        <div className={`AdminOneProduct-properties ${productActive}`}>
          <div
            role="button"
            tabIndex="0"
            onKeyDown={this.handleExpandChange}
            onClick={this.handleExpandChange}
            className="AdminOneProduct-small AdminOneProduct-cursorPointer"
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div className="AdminOneProduct-small">{id}</div>
          <div>{name}</div>
          <div>{descShort}</div>
          <div>{descLong}</div>
          <div>{price}</div>
          <div>{category}</div>
          <div>{subCategory}</div>
          <div>{type}</div>
          <div
            role="button"
            tabIndex="0"
            onKeyDown={this.handleActiveChange}
            onClick={this.handleActiveChange}
            className="AdminOneProduct-small AdminOneProduct-cursorPointer"
          >
            <button type="button" className="AdminOneProduct-activeButton">
              {active ? fullCircleIcon : emptyCircleIcon}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="AdminOneProduct-expandedInfo AdminNewProduct swing-in-top-bck">
            <div>
              <p>id</p>
              <p>{id}</p>
            </div>
            <div>
              <p>Názov</p>
              <TextareaAutosize id="name" value={name} onChange={this.handleFieldChange} />
            </div>
            <div>
              <p>Krátky popis</p>
              <TextareaAutosize
                id="descShort"
                value={descShort}
                onChange={this.handleFieldChange}
              />
            </div>
            <div>
              <p>Dlhý popis</p>
              <TextareaAutosize id="descLong" value={descLong} onChange={this.handleFieldChange} />
            </div>
            <div>
              <p>Cena</p>
              <TextareaAutosize id="price" value={price} onChange={this.handleFieldChange} />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Kategória</p>
              <SelectWithLabel
                id="category"
                onChange={(select) => this.handleSelectChange(select.value, 'category')}
                value={category}
                defaultOption={category}
                options={['FUTON', 'SOFA', 'BED', 'ADD-ON']}
              />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Podkategória</p>
              <Dropdown
                value={subCategory}
                options={[subCategory, 'latex', '110x120cm', 'bavlna']}
                onChange={this.handleSelectChange}
              />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Typ</p>
              <Dropdown
                value={type}
                options={[type, 'doplnok cerveny', 'postel jeden ram', 'postel jedna farba']}
                onChange={this.handleSelectChange}
              />
            </div>
            <div>
              <p>Obrázky</p>
              <div className="AdminProducts-imageUpload">
                <h2>Aktuálne súbory</h2>
                {/* <ul className="AdminOneProduct-uploadedImages">
                  {images.map((img) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb <Button text="odstrániť" />
                    </li>
                  ))}
                </ul> */}
                <ul className="AdminOneProduct-uploadedImages">
                  {images.map((img, index) => (
                    <li>
                      {img.split('/')[1]}
                      <Button
                        onClick={() => this.removeImageFromExisting(index)}
                        text="odstrániť"
                      />
                    </li>
                  ))}
                </ul>
                <ImageUploader
                  withIcon
                  buttonText="Nahrajte sem obrázky"
                  onChange={this.addImage}
                  imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                />
                <h2>Nahrané súbory</h2>
                <ul>
                  {newImages.map((img, index) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb{' '}
                      <Button onClick={() => this.removeImage(index)} text="odstrániť" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="AdminProducts-saveButton">
              <p />
              <Button text="Uložiť" onClick={this.updateProduct} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminOneProduct;
