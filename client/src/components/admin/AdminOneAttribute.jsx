import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from 'react-dropdown';
import Button from '../Button';
import { deleteIcon, deleteIconWhite, chevronDownIcon, chevronUpIcon } from '../../icons';
import AdminNewAttribute from './AdminNewAttribute';
import '../../styles/admin/AdminOneAttribute.css';
import AdminAttributesFirstRow from './AdminAttributesFirstRow';
import AdminAttributesOptionsFirstRow from './AdminAttributesOptionsFirstRow';

class AdminOneAttribute extends React.Component {
  state = {
    isExpanded: false,
    options: [
      {
        name: 'červená',
        price: '11,99',
      },
      {
        name: 'modrá',
        price: '19,99',
      },
      {
        name: 'zelena',
        price: '29,99',
      },
      {
        name: 'zlta',
        price: '39,99',
      },
    ],
  };

  constructor() {
    super();

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.addNewOption = this.addNewOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
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

  render() {
    const { isExpanded, options } = this.state;
    const { name, type, values } = this.props;
    const attributeOptions = options.map((option, index) => (
      <div className="AdminOneAttribute-oneOption">
        <TextareaAutosize value={option.name} />
        <TextareaAutosize value={option.price} />
        <div className="AdminOneAttribute-deleteButton" onClick={() => this.removeOption(index)}>
          {deleteIcon}
        </div>
      </div>
    ));

    return (
      <div className="AdminOneAttribute">
        <div className="AdminOneAttribute-properties">
          <div
            onClick={this.handleExpandChange}
            className="AdminOneAttribute-small AdminOneAttribute-cursorPointer"
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div>{name}</div>
          <div>{type}</div>
          <div
            onClick={this.handleActiveChange}
            className="AdminOneAttribute-small AdminOneProduct-cursorPointer"
          >
            <button className="AdminOneAttribute-activeButton">{deleteIcon}</button>
          </div>
        </div>
        {isExpanded && <AdminNewAttribute createNewAttribute={this.props.createNewAttribute} />}
      </div>
    );
  }
}

export default AdminOneAttribute;
