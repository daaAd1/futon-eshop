import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ImageUploader from 'react-images-upload';
import Button from './Button';
import { deleteIcon, chevronDownIcon, chevronUpIcon } from '../icons';
import '../styles/components/AdminOneType.css';

class AdminOneType extends React.Component {
  state = {
    isExpanded: false,
  };

  constructor() {
    super();

    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleExpandChange() {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    const { isExpanded } = this.state;
    const { name } = this.props;

    return (
      <div className="AdminOneType">
        <div className=" AdminOneType-properties">
          <div
            onClick={this.handleExpandChange}
            className=" AdminOneType-cursorPointer AdminOneType-small "
          >
            {isExpanded ? chevronUpIcon : chevronDownIcon}
          </div>
          <div>{name}</div>
          <div className="AdminOneType-small AdminOneType-cursorPointer">{deleteIcon}</div>
        </div>
        {isExpanded && (
          <div className="AdminOneType-expandedInfo swing-in-top-bck">
            <div>
              <p>Názov</p>
              <TextareaAutosize value={name} />
            </div>

            <div className="AdminProducts-saveButton">
              <p />
              <Button text="Uložiť" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AdminOneType;
