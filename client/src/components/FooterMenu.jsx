import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/FooterMenu.css';
import * as routes from '../routes';

class FooterMenu extends React.Component {
  render() {
    return (
      <div className="FooterMenu">
        <NavLink to={routes.FAQ}>Najčastejšie otázky</NavLink>
        <NavLink to={routes.CONTACT}>Kontakt</NavLink>
        <NavLink to={routes.SHIPPING}>Doprava a platba</NavLink>
        <NavLink to={routes.TERMS}>Obchodné podmienky</NavLink>
      </div>
    );
  }
}

export default FooterMenu;
