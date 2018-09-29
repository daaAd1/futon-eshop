import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import Dropdown from 'react-dropdown';
import Button from '../Button';
import AdminAttributesFirstRow from './AdminAttributesFirstRow';
import AdminNewAttribute from './AdminNewAttribute';
import AdminOneAttribute from './AdminOneAttribute';
import AdminAttributesOptionsFirstRow from './AdminAttributesOptionsFirstRow';
import { deleteIcon } from '../../icons';
import '../../styles/admin/AdminAttributes.css';

class AdminAttributes extends React.Component {
  constructor() {
    super();
    this.state = {
      isNewAttributeFormOpen: false,
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

    this.toggleNewAttributeForm = this.toggleNewAttributeForm.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.addNewOption = this.addNewOption.bind(this);
  }

  toggleNewAttributeForm() {
    this.setState((prevState) => ({
      isNewAttributeFormOpen: !prevState.isNewAttributeFormOpen,
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
    const { isNewAttributeFormOpen, options } = this.state;
    const attributesArr = [
      { name: 'veľkosť futonu', type: 'doplnok' },
      { name: 'farba futonu', type: 'posteľ' },
      { name: 'farba tkaniny', type: 'sofa' },
      { name: 'veľkosť futonu', type: 'futon' },
    ];
    const { attributes, isFetching } = this.props;
    const { items } = attributes;
    if (!items) {
      return <div />;
    }
    const attributeRows = items.map((attribute) => (
      <AdminOneAttribute
        createNewAttribute={this.props.createNewAttribute}
        name={attribute.name}
        type={attribute.type}
        values={attribute.values}
      />
    ));
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
      <div className="AdminAttributes">
        <div className="AdminAttributes-header">
          <h1>Atribúty</h1>
          <Button onClick={this.toggleNewAttributeForm} text="Nový atribút" />
        </div>
        {isNewAttributeFormOpen && (
          <AdminNewAttribute createNewAttribute={this.props.createNewAttribute} />
        )}
        <div className="AdminAttributes-listOfAttributes">
          <AdminAttributesFirstRow />
          {attributeRows}
        </div>
      </div>
    );
  }
}

export default AdminAttributes;
