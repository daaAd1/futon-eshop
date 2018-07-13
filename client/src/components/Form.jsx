import React from 'react';
import Textarea from 'react-textarea-autosize';
import '../styles/components/Form.css';
import Button from './Button';
import TextareaWithLabel from './TextareaWithLabel';

class Form extends React.Component {
  render() {
    return (
      <div className="Form">
        <h1>Objednanie tovaru</h1>
        <div className="Form-inputFields">
          <TextareaWithLabel label="Meno" placeholder="Ján Tóth" id="name" />
          <TextareaWithLabel label="Email" placeholder="jantoth@gmail.com" id="email" />
          <TextareaWithLabel label="Adresa" placeholder="Lesná 3" id="address" />
          <TextareaWithLabel label="Telefónne číslo" placeholder="0931859503" id="phone" />
        </div>
        <Button text="Objednať" />
      </div>
    );
  }
}

export default Form;
