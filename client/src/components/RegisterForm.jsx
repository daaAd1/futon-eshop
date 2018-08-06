import React from 'react';
import Steps from 'rc-steps';
import { CSSTransitionGroup } from 'react-transition-group';
import MediaQuery from 'react-responsive';
import 'rc-steps/assets/index.css';
import 'rc-steps/assets/iconfont.css';
import '../styles/components/RegisterForm.css';
import TextareaWithLabel from './TextareaWithLabel';
import PasswordWithLabel from './PasswordWithLabel';
import Button from './Button';
import InputFieldsContainer from './InputFieldsContainer';
import RegisterFormAddress from './RegisterFormAddress';
import RegisterFormContact from './RegisterFormContact';
import RegisterFormPassword from './RegisterFormPassword';

class RegisterForm extends React.Component {
  state = {
    currentStep: 1,
    maxSteps: 3,
  };

  constructor(props) {
    super(props);

    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.setCurrentStep = this.setCurrentStep.bind(this);
  }

  handleBackClick() {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep - 1,
    }));
  }

  handleNextClick() {
    this.setState((prevState) => ({
      currentStep: prevState.currentStep + 1,
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

    const { currentStep, maxSteps } = this.state;
    return (
      <div className="RegisterForm">
        <h1>Objednávka</h1>
        <MediaQuery query="(max-width:630px)">
          <Steps direction="vertical" current={currentStep - 1}>
            <Steps.Step onClick={() => this.setCurrentStep(1)} title="Kontaktné informácie" />
            <Steps.Step onClick={() => this.setCurrentStep(2)} title="Adresa" />
            <Steps.Step onClick={() => this.setCurrentStep(3)} title="Vytvorenie účtu" />
          </Steps>
        </MediaQuery>
        <MediaQuery query="(min-width: 631px)">
          {' '}
          <Steps current={currentStep - 1}>
            <Steps.Step onClick={() => this.setCurrentStep(1)} title="Kontaktné informácie" />
            <Steps.Step onClick={() => this.setCurrentStep(2)} title="Adresa" />
            <Steps.Step onClick={() => this.setCurrentStep(3)} title="Vytvorenie účtu" />
          </Steps>
        </MediaQuery>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {currentStep === 1 && <RegisterFormContact />}
          {currentStep === 2 && <RegisterFormAddress />}
          {currentStep === 3 && <RegisterFormPassword />}
        </CSSTransitionGroup>

        <div className="RegisterForm-backAndNextButtons">
          {currentStep === 1 && <Button disabled onClick={this.handleBackClick} text="<- Späť" />}
          {currentStep !== 1 && (
            <Button type="tertiary" onClick={this.handleBackClick} text="<- Späť" />
          )}
          {currentStep !== maxSteps && (
            <Button onClick={this.handleNextClick} text="Pokračovať ->" />
          )}
        </div>
      </div>
    );
  }
}

export default RegisterForm;
