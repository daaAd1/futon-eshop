import React from 'react';
import logo from '../img/logo.jpg';
import '../styles/components/HeaderMenu.css';
import { emptyCartIcon } from '../icons';
import ResponsiveMenu from 'react-responsive-navbar';

class FooterMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <a href="/home">
          <img src={logo} alt="Nejfuton logo" />
        </a>
        <div className="HeaderMenu-mainCategories">
          <a href="/futony/" className="HeaderMenu-dropdown">
            <p>Futony</p>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/futony/bavlna/">Bavlna</a>
              <a href="/futony/kokos/">Kokos</a>
              <a href="/futony/latex/">Latex</a>
              <a href="/futony/detske">Detské</a>
              <a href="/futony/masazove">K masážam</a>
            </div>
          </a>
          <a href="/futony/" className="HeaderMenu-dropdown">
            <p>Pohovky</p>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/pohovky/80-90x200/">80-90x200 cm</a>
              <a href="/pohovky/140x200/">140x200 cm</a>
              <a href="/pohovky/160x200/">160x200 cm</a>
            </div>
          </a>
          <a href="/postele/" className="HeaderMenu-dropdown">
            <p>Postele</p>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/postele/90x200/">90x200 cm</a>
              <a href="/postele/140x200/">140x200 cm</a>
              <a href="/postele/160x200/">160x200 cm</a>
              <a href="/postele/180x200/">180x200 cm</a>
            </div>
          </a>
          <a href="/doplnky/" className="HeaderMenu-dropdown">
            <p>Doplnky</p>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/doplnky/kresla/">Kreslá</a>
              <a href="/doplnky/nabytok/">Nábytok</a>
              <a href="/doplnky/vankuse/">Vankúše</a>
            </div>
          </a>
        </div>
        <div className="HeaderMenu-cartLogin">
          <a href="/abc">Prihlásenie</a>
          <a href="/bcd">{emptyCartIcon} Košík</a>
        </div>
      </div>
    );
  }
}

export default FooterMenu;