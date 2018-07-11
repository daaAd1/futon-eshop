import React from 'react';
import logo from '../img/logo.png';
import '../styles/components/HeaderMenu.css';
import { emptyCartIcon } from '../icons';

class FooterMenu extends React.Component {
  render() {
    return (
      <div className="HeaderMenu">
        <a href="/home">
          <img src={logo} alt="Nejfuton logo" />
        </a>
        <div className="HeaderMenu-mainCategories">
          <div className="HeaderMenu-dropdown">
            <a href="/futony/">
              <div>Futony</div>
            </a>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/futony/bavlna/">Bavlna</a>
              <a href="/futony/kokos/">Kokos</a>
              <a href="/futony/latex/">Latex</a>
              <a href="/futony/detske">Detské</a>
              <a href="/futony/masazove">K masážam</a>
            </div>
          </div>
          <div className="HeaderMenu-dropdown">
            <a href="/futony/">
              <div>Pohovky</div>
            </a>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/pohovky/80-90x200/">80-90x200 cm</a>
              <a href="/pohovky/140x200/">140x200 cm</a>
              <a href="/pohovky/160x200/">160x200 cm</a>
            </div>
          </div>
          <div className="HeaderMenu-dropdown">
            <a href="/postele/">
              <div>Postele</div>
            </a>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/postele/90x200/">90x200 cm</a>
              <a href="/postele/140x200/">140x200 cm</a>
              <a href="/postele/160x200/">160x200 cm</a>
              <a href="/postele/180x200/">180x200 cm</a>
            </div>
          </div>
          <div className="HeaderMenu-dropdown">
            <a href="/doplnky/">
              <div>Doplnky</div>
            </a>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/doplnky/kresla/">Kreslá</a>
              <a href="/doplnky/nabytok/">Nábytok</a>
              <a href="/doplnky/vankuse/">Vankúše</a>
            </div>
          </div>
        </div>
        <div className="HeaderMenu-cartLogin">
          <a href="/abc">Prihlásenie</a>
          <a href="/bcd">{emptyCartIcon}</a>
        </div>
      </div>
    );
  }
}

export default FooterMenu;
