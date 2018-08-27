import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from 'react-dropdown';
import Button from '../Button';
import { deleteIcon, deleteIconWhite, chevronDownIcon, chevronUpIcon } from '../../icons';
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
    const { id, name, shortDesc, longDesc, price, type } = this.props;
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
        {isExpanded && (
          <div className="AdminOneAttribute-expandedInfo swing-in-top-bck">
            <div>
              <p>Názov</p>
              <TextareaAutosize value={name} />
            </div>
            <div className="AdminOneAttribute-dropdownRow">
              <p>Typ</p>
              <Dropdown value="doplnok" options={['doplnok', 'sofa', 'futon']} />
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
              <Button text="Uložiť" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminOneAttribute;
