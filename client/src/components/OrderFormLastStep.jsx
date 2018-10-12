import React from 'react';
import '../styles/components/OrderFormLastStep.css';
import TextareaAutosize from 'react-textarea-autosize';
import CheckInformationText from './CheckInformationText';
import CartItem from './CartItem';
import { packageIcon, payIcon, deliveryIcon, creditCardIcon } from '../icons';

const OrderFormLastStep = (props) => {
  const { cart, note, onChange } = props;

  const cartItems = cart.map((item) => (
    <CartItem
      type="readOnly"
      itemQuantity={item.quantity}
      name={item.name}
      price={item.totalItemPrice}
      image={item.image}
      selectedOptions={item.selectedOptions}
    />
  ));

  const totalPricesArray = cart.map((product) => product.totalItemPrice);
  const totalPrice = totalPricesArray.reduce((a, b) => a + b, 0);

  return (
    <div className="OrderFormLastStep">
      <h1>Kontrola objednávky</h1>
      <div>
        <div className="OrderFormLastStep-informations">
          <h2>Kontaktné informácie</h2>
          <CheckInformationText label="Meno" text="Jozef Korikov" />
          <CheckInformationText label="Email" text="jozefkorikov@email.com" />
          <CheckInformationText label="Telefón" text="+421 90 870 970" />
        </div>
        <div className="OrderFormLastStep-informations">
          <h2>Adresa</h2>
          <CheckInformationText label="Krajina" text="Slovensko" />
          <CheckInformationText label="Mesto" text="Bernolákovo" />
          <CheckInformationText label="Ulica a PSČ" text="Holandská 5 03010" />
        </div>
        <div className="OrderFormLastStep-informations">
          <h2>Doručenia a platba</h2>
          <CheckInformationText label="Platba" text="Dobierkou" />
          <CheckInformationText label="Doručenie" text="TOPTRANS" />
        </div>
        <div className="OrderFormLastStep-cart">
          <h2>Zhrnutie objednávky</h2>
          {cartItems}
          <div className="OrderFormLastStep-totalPrice">
            <p>Celková suma:</p> <p>{totalPrice} €</p>
          </div>
        </div>
        <div className="OrderFormLastStep-additionalNote">
          <h2>Poznámka/Pripomienka ku objednávke</h2>
          <TextareaAutosize
            onChange={(event) => onChange('note', event.target.value)}
            value={note}
            minRows={3}
            placeholder="Poznámka k objednávke"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderFormLastStep;
