import React from 'react';
import InputFieldsContainer from './InputFieldsContainer';
import TextareaWithLabel from './TextareaWithLabel';
import '../styles/components/OrderFormAddress.css';

class OrderFormAddress extends React.Component {
  render() {
    const nameRegularExpression = new RegExp('\\w\\w+');
    const emailRegularExpression = new RegExp('[^@]+@[^@]+\\.[^@]+');
    const pscRegularExpression = new RegExp('\\d{5}');

    const { country, city, address, psc } = this.props;
    return (
      <div className="OrderFormAddress">
        <h1>Adresa</h1>
        <p className="OrderForm-requiredFieldsNotice">*Povinné polia</p>
        <fieldset
          onChange={(event) => this.props.onChange('country', event.target.value)}
          className="OrderFormAddress-countryChooser"
          id="country"
        >
          <legend>Štát*</legend>
          <p>
            <input
              checked={country === 'Slovensko'}
              type="radio"
              name="platba"
              id="slovensko"
              value="Slovensko"
            />
            <label htmlFor="slovensko">Slovensko</label>
          </p>
          <p>
            <input
              checked={country === 'Česká republika'}
              type="radio"
              name="platba"
              id="cesko"
              value="Česká republika"
            />
            <label htmlFor="cesko">Česká republika</label>
          </p>
        </fieldset>
        <TextareaWithLabel
          regex={nameRegularExpression}
          label="Mesto*"
          placeholder="Bratislava"
          id="address-city"
          value={city}
          onChange={(value) => this.props.onChange('city', value)}
        />
        <InputFieldsContainer flow="row" className="Form-inputFields">
          <TextareaWithLabel
            regex={emailRegularExpression}
            label="Názov a číslo ulice*"
            placeholder="Košická 2"
            id="register-address-street-number"
            value={address}
            onChange={(value) => this.props.onChange('address', value)}
          />
          <TextareaWithLabel
            regex={pscRegularExpression}
            label="PSČ*"
            placeholder="04001"
            id="register-psc"
            size="third"
            maxLength={5}
            value={psc}
            onChange={(value) => this.props.onChange('psc', value)}
          />
        </InputFieldsContainer>
      </div>
    );
  }
}

export default OrderFormAddress;
