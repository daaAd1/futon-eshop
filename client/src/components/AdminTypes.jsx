import React from 'react';
import Button from './Button';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/components/AdminTypes.css';
import AdminOneType from './AdminOneType';
import AdminTypesFirstRow from './AdminTypesFirstRow';

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
    const typesArr = ['doplnok', 'postel', 'sofa', 'futon'];
    const { isNewTypeFormOpen } = this.state;
    const types = typesArr.map((type) => <AdminOneType name={type} />);

    return (
      <div className="AdminTypes">
        <div className="AdminTypes-header">
          <h1>Typy produktov</h1>
          <Button onClick={this.toggleNewTypeForm} text="Nový typ" />
        </div>
        {isNewTypeFormOpen && (
          <div className="AdminTypes-newType swing-in-top-bck">
            <div>
              <p>Názov typu</p>
              <TextareaAutosize />
            </div>
            <div className="AdminTypes-newTypeButton">
              <p />
              <Button text="Vytvoriť typ" />
            </div>
          </div>
        )}
        <div className="AdminTypes-listOfTypes">
          <AdminTypesFirstRow />
          {types}
        </div>
      </div>
    );
  }
}

export default AdminTypes;
