import React from 'react';
import logo from '../img/logo.jpg';
import '../styles/components/HeaderMenu.css';
import { emptyCartIcon } from '../icons';
import HamburgerMenu from './HamburgerMenu';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div className="HeaderMenu">
        <div className="HeaderMenu-logoAndIcon">
          <a href="/home">
            <img src={logo} alt="Nejfuton logo" />
          </a>
          <HamburgerMenu isOpen={isOpen} onHamburgerClick={this.handleHamburgerClick} />
        </div>
        {isOpen && (
          <div className="HeaderMenu-mainContentResponsive">
            <div className="HeaderMenu-mainCategories">
              <a href="/futony/" className="HeaderMenu-dropdown">
                <p>Futony</p>
                <div className="HeaderMenu-dropdownHidden">
                  <a href="/futony/bavlna/">Bavlna</a>
                  <a href="/futony/kokos/">Kokos</a>
                  <a href="/futony/latex/">Latex</a>
                  <a href="/futony/detske/">Detské</a>
                  <a href="/futony/masazove/">K masážam</a>
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
        )}
        <div className="HeaderMenu-mainCategoriesFullscreen">
          <a href="/futony/" className="HeaderMenu-dropdown">
            <p>Futony</p>
            <div className="HeaderMenu-dropdownHidden">
              <a href="/futony/bavlna/">Bavlna</a>
              <a href="/futony/kokos/">Kokos</a>
              <a href="/futony/latex/">Latex</a>
              <a href="/futony/detske/">Detské</a>
              <a href="/futony/masazove/">K masážam</a>
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
        <div className="HeaderMenu-cartLoginFullscreen">
          <a href="/abc">Prihlásenie</a>
          <a href="/bcd">{emptyCartIcon} Košík</a>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
