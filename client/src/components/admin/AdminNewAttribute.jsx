import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../../styles/admin/AdminNewProduct.css';
import { deleteIcon } from '../../icons';
import Button from '../Button';
import SelectWithLabel from '../SelectWithLabel';
import AdminAttributesOptionsFirstRow from './AdminAttributesOptionsFirstRow';

const propTypes = {
  createNewAttribute: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminNewAttribute extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      type: '',
      options: [
        {
          name: '',
          price: '',
        },
        {
          name: '',
          price: '',
        },
      ],
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.createNewAttribute = this.createNewAttribute.bind(this);
    this.addNewOption = this.addNewOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  handleFieldChange(event) {
    const key = event.target.id;
    this.setState({ [key]: event.target.value });
  }

  handleSelectChange(value, key) {
    this.setState({ [key]: value });
  }

  handleOptionChange(event, index, key) {
    const { options } = this.state;
    options[index][key] = event.target.value;
    this.setState({
      options,
    });
  }

  removeOption(index) {
    const newState = this.state;
    newState.options.splice(index, 1);
    this.setState(newState);
  }

  addNewOption() {
    this.setState((prevState) => ({
      options: prevState.options.concat([{ name: '', price: '' }]),
    }));
  }

  createNewAttribute() {
    const { name, type, options } = this.state;
    const { createNewAttribute } = this.props;

    const body = {};
    body.name = name;
    body.type = type;
    body.options = options;

    createNewAttribute(body);
  }

  render() {
    const { name, type, options } = this.state;
    const attributeOptions = options.map((option, index) => (
      <div className="AdminOneAttribute-oneOption">
        <TextareaAutosize
          required
          value={option.name}
          onChange={(event) => this.handleOptionChange(event, index, 'name')}
        />
        <TextareaAutosize
          required
          value={option.price}
          onChange={(event) => this.handleOptionChange(event, index, 'price')}
        />
        <div
          role="button"
          tabIndex="0"
          onKeyDown={() => this.removeOption(index)}
          onClick={() => this.removeOption(index)}
          className="AdminOneAttribute-deleteButton"
        >
          {deleteIcon}
        </div>
      </div>
    ));

    let isOneOptionFilled = false;
    options.map((option) => {
      if (option.name !== '' && option.price !== '') {
        isOneOptionFilled = true;
      }
    });

    return (
      <div className="AdminOneAttribute-expandedInfo AdminNewProduct swing-in-top-bck">
        <div>
          <p>Názov</p>
          <TextareaAutosize id="name" value={name} onChange={this.handleFieldChange} />
        </div>
        <div className="AdminOneAttribute-dropdownRow">
          <p>Typ</p>
          <SelectWithLabel
            id="type"
            onChange={(select) => this.handleSelectChange(select.value, 'type')}
            value={type}
            defaultOption=""
            options={['FUTON', 'SOFA', 'BED', 'ADD-ON']}
          />
        </div>
        <div className="AdminOneAttribute-optionsRow">
          <p>Možnosti</p>
          <div>
            <AdminAttributesOptionsFirstRow />
            {attributeOptions}
            <div className="AdminOneAttribute-oneOption">
              <div className="AdminOneAttribute-newOption">
                <Button type="secondary" onClick={this.addNewOption} text="+" />
              </div>
            </div>
          </div>
        </div>
        <div className="AdminOneAttribute-saveButton">
          <p />
          <Button text="Uložiť" disabled={!isOneOptionFilled} onClick={this.createNewAttribute} />
        </div>
      </div>
    );
  }
}

AdminNewAttribute.propTypes = propTypes;
AdminNewAttribute.defaultProps = defaultProps;

export default AdminNewAttribute;
