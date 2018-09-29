import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import AdminOneType from './AdminOneType';
import AdminNewType from './AdminNewType';
import AdminTypesFirstRow from './AdminTypesFirstRow';
import '../../styles/admin/AdminTypes.css';

const propTypes = {
  types: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  createNewType: PropTypes.func.isRequired,
  updateType: PropTypes.func.isRequired,
  deleteType: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminTypes extends React.Component {
  constructor() {
    super();
    this.state = {
      isNewTypeFormOpen: false,
    };

    this.toggleNewTypeForm = this.toggleNewTypeForm.bind(this);
  }

  toggleNewTypeForm() {
    this.setState((prevState) => ({
      isNewTypeFormOpen: !prevState.isNewTypeFormOpen,
    }));
  }

  render() {
    const { isNewTypeFormOpen } = this.state;
    const { types, updateType, createNewType, deleteType } = this.props;
    const { items } = types || [];

    if (!items) {
      return <div />;
    }
    const typeRows = items.map((type) => (
      <AdminOneType
        id={type._id}
        updateType={updateType}
        deleteType={() => deleteType(type._id)}
        name={type.name}
      />
    ));

    return (
      <div className="AdminTypes">
        <div className="AdminTypes-header">
          <h1>Typy produktov</h1>
          <Button onClick={this.toggleNewTypeForm} text="Nový typ" />
        </div>
        {isNewTypeFormOpen && <AdminNewType createNewType={createNewType} />}
        <div className="AdminTypes-listOfTypes">
          <AdminTypesFirstRow />
          {typeRows}
        </div>
      </div>
    );
  }
}

AdminTypes.propTypes = propTypes;
AdminTypes.defaultProps = defaultProps;

export default AdminTypes;
