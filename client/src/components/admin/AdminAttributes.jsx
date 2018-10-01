import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import AdminAttributesFirstRow from './AdminAttributesFirstRow';
import AdminNewAttribute from './AdminNewAttribute';
import AdminOneAttribute from './AdminOneAttribute';
import '../../styles/admin/AdminAttributes.css';

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
  }

  toggleNewAttributeForm() {
    this.setState((prevState) => ({
      isNewAttributeFormOpen: !prevState.isNewAttributeFormOpen,
    }));
  }

  render() {
    const { isNewAttributeFormOpen } = this.state;
    const {
      attributes,
      isFetching,
      createNewAttribute,
      deleteAttribute,
      updateAttribute,
    } = this.props;
    const { items } = attributes;
    if (isFetching || !items) {
      return <div>loading</div>;
    }
    const attributeRows = items.map((attribute) => (
      <AdminOneAttribute
        createNewAttribute={createNewAttribute}
        deleteAttribute={deleteAttribute}
        updateAttribute={updateAttribute}
        name={attribute.name}
        type={attribute.type}
        options={attribute.options}
        id={attribute._id}
      />
    ));
    return (
      <div className="AdminAttributes">
        <div className="AdminAttributes-header">
          <h1>Atribúty</h1>
          <Button onClick={this.toggleNewAttributeForm} text="Nový atribút" />
        </div>
        {isNewAttributeFormOpen && <AdminNewAttribute createNewAttribute={createNewAttribute} />}
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
