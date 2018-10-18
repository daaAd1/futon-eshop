import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import AdminAttributesFirstRow from './AdminAttributesFirstRow';
import AdminNewAttribute from './AdminNewAttribute';
import AdminOneAttribute from './AdminOneAttribute';
import '../styles/admin/AdminAttributes.css';

const propTypes = {
  attributes: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  deleteAttribute: PropTypes.func.isRequired,
  updateAttribute: PropTypes.func.isRequired,
  createNewAttribute: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminAttributes extends React.Component {
  constructor() {
    super();
    this.state = {
      isNewAttributeFormOpen: false,
    };

    this.toggleNewAttributeForm = this.toggleNewAttributeForm.bind(this);
    this.createNewAttribute = this.createNewAttribute.bind(this);
  }

  toggleNewAttributeForm() {
    this.setState((prevState) => ({
      isNewAttributeFormOpen: !prevState.isNewAttributeFormOpen,
    }));
  }

  createNewAttribute(body) {
    const { createNewAttribute } = this.props;

    this.setState({
      isNewAttributeFormOpen: false,
    });

    createNewAttribute(body);
  }

  render() {
    const { isNewAttributeFormOpen } = this.state;
    const {
      types,
      attributes,
      isFetching,
      createNewAttribute,
      deleteAttribute,
      updateAttribute,
    } = this.props;
    const typesItems = types.items;
    const { items } = attributes;
    if (isFetching || !items) {
      return (
        <div className="AdminAttributes">
          <div className="AdminAttributes-header">
            <h1>Atribúty</h1>
          </div>
          <h2>loading</h2>
        </div>
      );
    }
    const attributeRows = items.map((attribute) => {
      const type =
        typesItems &&
        typesItems[typesItems.findIndex((type) => type._id === attribute.type)] &&
        typesItems[typesItems.findIndex((type) => type._id === attribute.type)].name;
      return (
        <AdminOneAttribute
          types={typesItems}
          createNewAttribute={createNewAttribute}
          deleteAttribute={deleteAttribute}
          updateAttribute={updateAttribute}
          name={attribute.name}
          type={type}
          options={attribute.options}
          id={attribute._id}
        />
      );
    });
    return (
      <div className="AdminAttributes">
        <div className="AdminAttributes-header">
          <h1>Atribúty</h1>
          <Button onClick={this.toggleNewAttributeForm} text="Nový atribút" />
        </div>
        {isNewAttributeFormOpen && (
          <AdminNewAttribute
            types={typesItems}
            createNewAttribute={(body) => this.createNewAttribute(body)}
          />
        )}
        <div className="AdminAttributes-listOfAttributes">
          <AdminAttributesFirstRow />
          {attributeRows}
        </div>
      </div>
    );
  }
}

AdminAttributes.propTypes = propTypes;
AdminAttributes.defaultProps = defaultProps;

export default AdminAttributes;
