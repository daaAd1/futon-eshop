import React from 'react';
import PropTypes from 'prop-types';
import { confirmAlert } from 'react-confirm-alert';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from './Button';
import SelectWithLabel from './SelectWithLabel';
import '../styles/admin/AdminTypes.css';
import '../styles/admin/AdminInformation.css';

const propTypes = {
  updateInformations: PropTypes.func.isRequired,
  informations: PropTypes.shape({
    faq: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,
    showroom: PropTypes.string.isRequired,
  }).isRequired,
};

const defaultProps = {};

class AdminInformation extends React.Component {
  constructor(props) {
    super(props);
    const { informations } = props;
    const faq = (informations && informations.faq) || 'abc';

    this.state = {
      currentOption: 'FAQ',
      currentText: faq,
    };

    this.confirmAndChangeCurrentOption = this.confirmAndChangeCurrentOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.updateInformation = this.updateInformation.bind(this);
  }

  confirmAndChangeCurrentOption(changeFunction, selectedOption) {
    const { currentOption, currentText } = this.state;
    const { informations } = this.props;
    const { faq, rules, contact, delivery, showroom } = informations || {};

    if (
      selectedOption !== currentOption &&
      currentText !== faq &&
      currentText !== rules &&
      currentText !== delivery &&
      currentText !== showroom &&
      currentText !== contact
    ) {
      confirmAlert({
        title: 'Potvrďte zmenu',
        message: 'Neuložili ste si svoje zmeny, ste si istý, že chcete zmeniť typ informácií?',
        buttons: [
          {
            label: 'Áno',
            onClick: () => this.handleSelectChange(selectedOption),
          },
          {
            label: 'Nie',
            onClick: () => {
              this.setState({ currentOption });
            },
          },
        ],
      });
    } else {
      this.handleSelectChange(selectedOption);
    }
  }

  handleChange(value) {
    this.setState({ currentText: value });
  }

  handleSelectChange(value) {
    const { informations } = this.props;
    const { faq, delivery, contact, rules, showroom } = informations || {};

    this.setState({ currentOption: value });

    if (value === 'FAQ') {
      this.setState({ currentText: faq || 'faq' });
    } else if (value === 'Doprava') {
      this.setState({ currentText: delivery || 'doprava' });
    } else if (value === 'Kontakt') {
      this.setState({ currentText: contact || 'kontakt' });
    } else if (value === 'Obch. podmienky') {
      this.setState({ currentText: rules || 'podmienky' });
    } else {
      this.setState({ currentText: showroom || 'showroom' });
    }
  }

  updateInformation() {
    const { currentOption, currentText } = this.state;
    const { updateInformations, informations } = this.props;
    const { faq, delivery, contact, rules, showroom } = informations;

    const body = {};
    body.faq = faq;
    body.delivery = delivery;
    body.contact = contact;
    body.rules = rules;
    body.showroom = showroom;

    if (currentOption === 'FAQ') {
      body.faq = currentText;
    } else if (currentOption === 'Doprava') {
      body.delivery = currentText;
    } else if (currentOption === 'Kontakt') {
      body.contact = currentText;
    } else if (currentOption === 'Obch. podmienky') {
      body.rules = currentText;
    } else {
      body.showroom = currentText;
    }

    updateInformations(body);
  }

  render() {
    const { currentText, currentOption } = this.state;

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

    return (
      <div className="AdminInformation">
        <div className="AdminInformation-header">
          <h1>Informácie</h1>
          <SelectWithLabel
            id="Možnosť"
            // onChange={(select) => this.handleSelectChange(select.value)}
            onChange={(select) =>
              this.confirmAndChangeCurrentOption(this.handleSelectChange, select.value)
            }
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
