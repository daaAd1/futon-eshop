import React from 'react';
import logo from '../img/logo.jpg';
import '../styles/components/HeaderMenu.css';
import { emptyCartIcon, hamburgerIcon, arrowDownIcon } from '../icons';

const HeaderMenu = (props) => {
  return (
    <div className="HeaderMenu">
      <div className="HeaderMenu-logoAndIconContainer">
        <a href="/home">
          <img src={logo} alt="Nejfuton logo" />
        </a>
        <label title="Show menu" className="HeaderMenu-hamburgerIcon" htmlFor="dropdownMainMenu">
          {hamburgerIcon}
        </label>
      </div>
      <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownMainMenu" />
      <div className="HeaderMenu-navigationLinks">
        <div className="HeaderMenu-centerContainer">
          <div className="HeaderMenu-dropdownLink">
            <a href="#">
              Futony{' '}
              <label title="Show additional links" htmlFor="dropdownLinkOne">
                {arrowDownIcon}
              </label>
            </a>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkOne" />

            <div className="HeaderMenu-dropdownAdditionalLinks">
              <a href="/futony/bavlna/">Bavlna</a>
              <a href="/futony/kokos/">Kokos</a>
              <a href="/futony/latex/">Latex</a>
              <a href="/futony/detske/">Detské</a>
              <a href="/futony/masazove/">K masážam</a>
            </div>
          </div>
          <div className="HeaderMenu-dropdownLink">
            <a href="#">
              Pohovky
              <label title="Show additional links" htmlFor="dropdownLinkTwo">
                {arrowDownIcon}
              </label>
            </a>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkTwo" />

            <div className="HeaderMenu-dropdownAdditionalLinks">
              <a href="/pohovky/80-90x200/">80-90x200 cm</a>
              <a href="/pohovky/140x200/">140x200 cm</a>
              <a href="/pohovky/160x200/">160x200 cm</a>
            </div>
          </div>
          <div className="HeaderMenu-dropdownLink">
            <a href="#">
              Postele
              <label title="Show additional links" htmlFor="dropdownLinkThree">
                {arrowDownIcon}
              </label>
            </a>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkThree" />

            <div className="HeaderMenu-dropdownAdditionalLinks">
              <a href="/postele/90x200/">90x200 cm</a>
              <a href="/postele/140x200/">140x200 cm</a>
              <a href="/postele/160x200/">160x200 cm</a>
              <a href="/postele/180x200/">180x200 cm</a>
            </div>
          </div>
          <div className="HeaderMenu-dropdownLink">
            <a href="#">
              Doplnky
              <label title="Show additional links" htmlFor="dropdownLinkFour">
                {arrowDownIcon}
              </label>
            </a>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkFour" />
            <div className="HeaderMenu-dropdownAdditionalLinks">
              <a href="/doplnky/kresla/">Kreslá</a>
              <a href="/doplnky/nabytok/">Nábytok</a>
              <a href="/doplnky/vankuse/">Vankúše</a>
            </div>
          </div>
        </div>
        <div className="HeaderMenu-rightContainer">
          <div className="HeaderMenu-rightContainerDropdownLink">
            <a href="/abc">Prihlásenie</a>
          </div>
          <div className="HeaderMenu-rightContainerDropdownLink">
            <a href="/bcd">{emptyCartIcon} Košík</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
