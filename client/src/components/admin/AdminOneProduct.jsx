import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ImageUploader from 'react-images-upload';
import Dropdown from 'react-dropdown';
import Button from '../Button';
import {
  deleteIcon,
  chevronDownIcon,
  chevronUpIcon,
  fullCircleIcon,
  emptyCircleIcon,
} from '../../icons';
import '../../styles/admin/AdminOneProduct.css';

class AdminOneProduct extends React.Component {
  state = {
    isExpanded: false,
    isActive: true,
    images: [],
    data: [],
    offset: 0,
  };

  constructor() {
    super();

    this.removeImage = this.removeImage.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleActiveChange = this.handleActiveChange.bind(this);
  }

  removeImage(index) {
    const newState = this.state;
    newState.images.splice(index, 1);
    this.setState(newState);
  }

  addImage(images) {
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

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  handleActiveChange() {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  }

  render() {
    const { isExpanded, isActive } = this.state;
    const { id, name, shortDesc, longDesc, price, type, category, subCategory } = this.props;

    const productActive = isActive
      ? 'color-change-reverse'
      : 'AdminOneProduct-propertiesInactive color-change ';

    return (
      <div className="AdminOneProduct">
        <div className={`AdminOneProduct-properties ${productActive}`}>
          <div
            onClick={this.handleExpandChange}
            className="AdminOneProduct-small AdminOneProduct-cursorPointer"
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div className="AdminOneProduct-small">{id}</div>
          <div>{name}</div>
          <div>{shortDesc}</div>
          <div>{longDesc}</div>
          <div>{price}</div>
          <div>{category}</div>
          <div>{subCategory}</div>
          <div>{type}</div>
          <div
            onClick={this.handleActiveChange}
            className="AdminOneProduct-small AdminOneProduct-cursorPointer"
          >
            <button className="AdminOneProduct-activeButton">
              {isActive ? fullCircleIcon : emptyCircleIcon}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="AdminOneProduct-expandedInfo swing-in-top-bck">
            <div>
              <p>id</p>
              <p>1</p>
            </div>
            <div>
              <p>Názov</p>
              <TextareaAutosize value={name} />
            </div>
            <div>
              <p>Krátky popis</p>
              <TextareaAutosize value={shortDesc} />
            </div>
            <div>
              <p>Dlhý popis</p>
              <TextareaAutosize value={longDesc} />
            </div>
            <div>
              <p>Cena</p>
              <TextareaAutosize value={price} />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Kategória</p>
              <Dropdown value={category} options={[category, 'doplnok', 'sofa', 'futon']} />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Podkategória</p>
              <Dropdown
                value={subCategory}
                options={[subCategory, 'latex', '110x120cm', 'bavlna']}
              />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Typ</p>
              <Dropdown
                value={type}
                options={[type, 'doplnok cerveny', 'postel jeden ram', 'postel jedna farba']}
              />
            </div>
            <div>
              <p>Obrázky</p>
              <div className="AdminProducts-imageUpload">
                <h2>Aktuálne súbory</h2>
                <ul className="AdminOneProduct-uploadedImages">
                  {this.state.images.map((img) => (
                    <li key={img.name}>
                      {img.name} - {img.size / 1000000} mb <Button text="odstrániť" />
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
                  {this.state.images.map((img, index) => (
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
              <Button text="Uložiť" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminOneProduct;
