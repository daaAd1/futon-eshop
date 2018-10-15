import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/admin/AdminNewProduct.css';
import Button from './Button';

const propTypes = {
  createNewType: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminNewType extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.createNewType = this.createNewType.bind(this);
  }

  handleFieldChange(event) {
    const key = event.target.id;
    this.setState({ [key]: event.target.value });
  }

  createNewType() {
    const { name } = this.state;
    const { createNewType } = this.props;

    const body = {};
    body.name = name;

    createNewType(body);
  }

  render() {
    const { name } = this.state;
    return (
      <div className="AdminTypes-newType swing-in-top-bck">
        <div>
          <p>Názov typu</p>
          <TextareaAutosize id="name" value={name} onChange={this.handleFieldChange} />
        </div>
        <div className="AdminTypes-newTypeButton">
          <p />
          <Button text="Vytvoriť typ" onClick={this.createNewType} />
        </div>
      </div>
    );
  }
}

AdminNewType.propTypes = propTypes;
AdminNewType.defaultProps = defaultProps;

export default AdminNewType;
