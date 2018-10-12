import React from 'react';
import Steps from 'rc-steps';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import '../styles/components/OrderForm.css';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import Button from './Button';
import InputFieldsContainer from './InputFieldsContainer';
import OrderFormAddress from './OrderFormAddress';
import OrderFormContact from './OrderFormContact';
import OrderFormPayment from './OrderFormPayment';
import OrderFormLastStep from './OrderFormLastStep';
import OrderFormCartContainer from '../containers/OrderFormCartContainer';

class OrderForm extends React.Component {
  state = {
    currentStep: 1,
    maxSteps: 4,
    firstName: localStorage.getItem('form-firstName') || '',
    lastName: localStorage.getItem('form-lastName') || '',
    email: localStorage.getItem('form-email') || '',
    phone: localStorage.getItem('form-phone') || '',
    country: localStorage.getItem('form-country') || 'Slovensko',
    city: localStorage.getItem('form-city') || '',
    address: localStorage.getItem('form-address') || '',
    psc: localStorage.getItem('form-psc') || '',
    payment: localStorage.getItem('form-payment') || 'Dobierka',
    delivery: localStorage.getItem('form-delivery') || 'Toptrans',
    note: localStorage.getItem('form-note') || '',
  };

  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.setCurrentStep = this.setCurrentStep.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(property, value) {
    this.setState({
      [property]: value,
    });
    localStorage.setItem(`form-${property}`, value);
  }

  handleBackClick() {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep !== 0 ? prevState.currentStep - 1 : 0,
    }));
  }

  handleNextClick() {
    this.setState((prevState) => ({
      currentStep:
        prevState.currentStep !== prevState.maxSteps
          ? prevState.currentStep + 1
          : prevState.maxSteps,
    }));
  }

  setCurrentStep(newStep) {
    this.setState({
      currentStep: newStep,
    });
  }

  render() {
    const nameRegularExpression = new RegExp('\\w+\\s\\w+');
    const emailRegularExpresion = new RegExp('[^@]+@[^@]+\\.[^@]+');

    const {
      currentStep,
      country,
      payment,
      delivery,
      note,
      firstName,
      lastName,
      email,
      phone,
      city,
      address,
      psc,
    } = this.state;
    return (
      <div className="OrderForm">
        <h1>Objednanie tovaru</h1>
        <MediaQuery query="(max-width:735px)">
          <Steps direction="vertical" current={currentStep - 1}>
            <Steps.Step onClick={() => this.setCurrentStep(1)} title="Kontakt" />
            <Steps.Step onClick={() => this.setCurrentStep(2)} title="Adresa" />
            <Steps.Step onClick={() => this.setCurrentStep(3)} title="Spôsob platby" />
            <Steps.Step onClick={() => this.setCurrentStep(4)} title="Kontrola a objednanie" />
          </Steps>
        </MediaQuery>
        <MediaQuery query="(min-width: 736px)">
          {' '}
          <Steps current={currentStep - 1}>
            <Steps.Step onClick={() => this.setCurrentStep(1)} title="Kontakt" />
            <Steps.Step onClick={() => this.setCurrentStep(2)} title="Adresa" />
            <Steps.Step onClick={() => this.setCurrentStep(3)} title="Spôsob platby" />
            <Steps.Step onClick={() => this.setCurrentStep(4)} title="Kontrola a objednanie" />
          </Steps>
        </MediaQuery>
        {currentStep === 1 && (
          <div className="slide-in-right ">
            <OrderFormContact
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              onChange={this.handleFormChange}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="slide-in-right ">
            <OrderFormAddress
              psc={psc}
              address={address}
              city={city}
              country={country}
              onChange={this.handleFormChange}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div className="slide-in-right ">
            <OrderFormPayment
              payment={payment}
              delivery={delivery}
              onChange={this.handleFormChange}
            />
          </div>
        )}
        {currentStep === 4 && (
          <div className="slide-in-right ">
            <OrderFormCartContainer note={note} onChange={this.handleFormChange} />
          </div>
        )}

        <div className="OrderForm-backAndNextButtons">
          {
            <Button
              type="tertiary"
              disabled={currentStep === 1}
              onClick={this.handleBackClick}
              text="<- Späť"
            />
          }
          {
            <Button
              onClick={this.handleNextClick}
              text={currentStep === 4 ? 'Objednať' : 'Pokračovať ->'}
            />
          }
        </div>
      </div>
    );
  }
}

export default OrderForm;
