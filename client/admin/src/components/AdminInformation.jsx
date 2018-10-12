import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './Button';
import SelectWithLabel from './SelectWithLabel';
import '../styles/admin/AdminTypes.css';
import '../styles/admin/AdminInformation.css';

const propTypes = {
  updateFaq: PropTypes.func.isRequired,
  updateDelivery: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  updateRules: PropTypes.func.isRequired,
  updateShowroom: PropTypes.func.isRequired,
};

const defaultProps = {};

class AdminInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      isNewTypeFormOpen: false,
      currentOption: 'FAQ',
      currentText: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.updateInformation = this.updateInformation.bind(this);
  }

  handleChange(value) {
    this.setState({ currentText: value });
  }

  handleSelectChange(value, key) {
    this.setState({ [key]: value });
  }

  updateInformation() {
    const { currentOption, currentText } = this.state;
    const { updateFaq, updateDelivery, updateContact, updateRules, updateShowroom } = this.props;

    const body = {};
    body.text = currentText;

    if (currentOption === 'FAQ') {
      updateFaq(body, 'faq');
    } else if (currentOption === 'Doprava') {
      updateDelivery(body, 'delivery');
    } else if (currentOption === 'Kontakt') {
      updateContact(body, 'contact');
    } else if (currentOption === 'Obch. podmienky') {
      updateRules(body, 'rules');
    } else {
      updateShowroom(body, 'showroom');
    }
  }

  render() {
    const { isNewTypeFormOpen, currentText, currentOption } = this.state;
    const { types, updateType, createNewType, deleteType } = this.props;
    const { items } = types || [];

    // if (!items) {
    //   return (
    //     <div className="AdminAttributes">
    //       <div className="AdminAttributes-header">
    //         <h1>Informácie</h1>
    //       </div>
    //       <h2>loading</h2>
    //     </div>
    //   );
    // }
    // const typeRows = items.map((type) => (
    //   <AdminOneType
    //     id={type._id}
    //     updateType={updateType}
    //     deleteType={() => deleteType(type._id)}
    //     name={type.name}
    //   />
    // ));

    return (
      <div className="AdminInformation">
        <div className="AdminInformation-header">
          <h1>Informácie</h1>
          <SelectWithLabel
            id="Možnosť"
            onChange={(select) => this.handleSelectChange(select.value, 'currentOption')}
            options={['FAQ', 'Doprava', 'Kontakt', 'Obch. podmienky', 'ShowRoom']}
            defaultOption={currentOption}
            value={currentOption}
          />
        </div>
        <ReactQuill value={currentText} onChange={this.handleChange} />
        <div className="AdminInformation-saveButton">
          <Button text="Uložiť" onClick={this.updateInformation} />
        </div>
      </div>
    );
  }
}

AdminInformation.propTypes = propTypes;
AdminInformation.defaultProps = defaultProps;

export default AdminInformation;
