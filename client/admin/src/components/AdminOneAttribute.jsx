import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from 'react-dropdown';
import Button from './Button';
import { deleteIcon, chevronDownIcon, chevronUpIcon } from '../icons';
import '../styles/admin/AdminOneAttribute.css';
import AdminAttributesOptionsFirstRow from './AdminAttributesOptionsFirstRow';

const propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  types: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  updateAttribute: PropTypes.func.isRequired,
  deleteAttribute: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminOneAttribute extends React.Component {
  constructor(props) {
    super(props);
    const { name, type, options } = props;
    this.state = {
      name,
      type,
      options,
      isExpanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.addNewOption = this.addNewOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.updateAttribute = this.updateAttribute.bind(this);
  }

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
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

  updateAttribute() {
    const { id, updateAttribute, types } = this.props;
    const { name, type, options } = this.state;

    const selectedTypeId =
      types.find((item) => item.name === type) && types.find((item) => item.name === type)._id;

    const body = {};
    body.name = name;
    body.type = selectedTypeId;
    body.options = options;

    updateAttribute(body, id);
  }

  render() {
    const { deleteAttribute, id, types } = this.props;
    const { name, type, options, isExpanded } = this.state;
    const typeOptions = types && types.map((item) => item.name);

    const attributeOptions = options.map((option, index) => (
      <div className="AdminOneAttribute-oneOption" key={index}>
        <TextareaAutosize
          id={`name${index}`}
          required
          value={option.name}
          onChange={(event) => this.handleOptionChange(event, index, 'name')}
        />
        <TextareaAutosize
          id={`price${index}`}
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

    return (
      <div className="AdminOneAttribute">
        <div className="AdminOneAttribute-properties">
          <div
            role="button"
            tabIndex="0"
            onKeyDown={this.handleExpandChange}
            onClick={this.handleExpandChange}
            className="AdminOneAttribute-small AdminOneAttribute-cursorPointer"
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div>{name}</div>
          <div>{type}</div>
          <div
            role="button"
            tabIndex="0"
            onKeyDown={this.handleActiveChange}
            onClick={this.handleActiveChange}
            className="AdminOneAttribute-small AdminOneProduct-cursorPointer"
          >
            <button
              type="button"
              className="AdminOneAttribute-activeButton"
              onClick={() => deleteAttribute(id)}
            >
              {deleteIcon}
            </button>
          </div>
        </div>
        {isExpanded && (
          <div className="AdminOneAttribute-expandedInfo AdminNewProduct swing-in-top-bck">
            <div>
              <p>Názov</p>
              <TextareaAutosize id="name" value={name} onChange={this.handleFieldChange} />
            </div>
            <div className="AdminOneProduct-dropdownRow">
              <p>Typ</p>
              <Dropdown
                value={type}
                options={typeOptions.sort()}
                onChange={(select) => this.handleSelectChange(select.value, 'type')}
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
              <Button text="Uložiť" onClick={this.updateAttribute} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

AdminOneAttribute.propTypes = propTypes;
AdminOneAttribute.defaultProps = defaultProps;

export default AdminOneAttribute;
