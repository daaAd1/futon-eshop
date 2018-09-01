import React from 'react';
import '../styles/components/OrderFormLastStep.css';
import TextareaAutosize from 'react-textarea-autosize';
import CheckInformationText from './CheckInformationText';
import CartItem from './CartItem';
import { packageIcon, payIcon, deliveryIcon, creditCardIcon } from '../icons';

class OrderFormLastStep extends React.Component {
  render() {
    const { password, repeatPassword, note } = this.props;

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
            <CartItem type="readOnly" itemQuantity="1" name="Matrac hriva-latex" price="99" />{' '}
            <CartItem type="readOnly" itemQuantity="3" name="Matrac vlna-hriva-latex" price="199" />{' '}
            <CartItem
              type="readOnly"
              itemQuantity="2"
              name="Bavlnený matrac s vrstvou kokosu a peny"
              price="299"
            />
            <div className="OrderFormLastStep-totalPrice">
              <p>Celková suma:</p> <p>599,00 €</p>
            </div>
          </div>
          <div className="OrderFormLastStep-additionalNote">
            <h2>Poznámka/Pripomienka ku objednávke</h2>
            <TextareaAutosize
              onChange={(event) => this.props.onChange('note', event.target.value)}
              value={note}
              minRows={3}
              placeholder="Poznámka k objednávke"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderFormLastStep;
