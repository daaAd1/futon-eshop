import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-textarea-autosize';
import Button from './Button';
import { deleteIcon, chevronDownIcon, chevronUpIcon } from '../icons';
import '../styles/admin/AdminOneType.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateType: PropTypes.func.isRequired,
  deleteType: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminOneType extends React.Component {
  constructor(props) {
    super(props);

    const { name } = props;
    this.state = {
      name,
      isExpanded: false,
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.updateType = this.updateType.bind(this);
  }

  handleFieldChange(event) {
    const key = event.target.id;
    this.setState({ [key]: event.target.value });
  }

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  updateType() {
    const { name } = this.state;
    const { id, updateType } = this.props;

    const body = {};
    body.name = name;

    updateType(body, id);
  }

  render() {
    const { name, isExpanded } = this.state;
    const { deleteType } = this.props;

    return (
      <div className="AdminOneType">
        <div className=" AdminOneType-properties">
          <div
            role="button"
            tabIndex="0"
            onKeyDown={this.handleExpandChange}
            onClick={this.handleExpandChange}
            className=" AdminOneType-cursorPointer AdminOneType-small "
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div>{name}</div>
          <div
            role="button"
            tabIndex="0"
            onKeyDown={deleteType}
            onClick={deleteType}
            className="AdminOneType-small AdminOneType-cursorPointer"
          >
            {deleteIcon}
          </div>
        </div>
        {isExpanded && (
          <div className="AdminOneType-expandedInfo swing-in-top-bck">
            <div>
              <p>Názov</p>
              <TextareaAutosize id="name" value={name} onChange={this.handleFieldChange} />
            </div>
            <div className="AdminProducts-saveButton">
              <p />
              <Button text="Uložiť" onClick={this.updateType} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

AdminOneType.propTypes = propTypes;
AdminOneType.defaultProps = defaultProps;

export default AdminOneType;
