import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import * as routes from '../constants/routes';
import '../styles/components/HeaderMenu.css';
import { hamburgerIcon, arrowDownIcon } from '../icons';
import Cart from './Cart';
import CartContainer from '../containers/CartContainer';

const HeaderMenu = (props) => {
  return (
    <div className="HeaderMenu">
      <div className="HeaderMenu-logoAndIconContainer">
        <Link to={routes.HOME}>
          <img src={logo} alt="Nejfuton logo" />
        </Link>
        <label title="Show menu" className="HeaderMenu-hamburgerIcon" htmlFor="dropdownMainMenu">
          {hamburgerIcon}
        </label>
      </div>
      <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownMainMenu" />
      <div className="HeaderMenu-navigationLinks">
        <div className="HeaderMenu-centerContainer">
          <div className="HeaderMenu-dropdownLink">
            <Link to="/product?category=futon">
              Futony{' '}
              <label title="Show additional links" htmlFor="dropdownLinkOne">
                {arrowDownIcon}
              </label>
            </Link>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkOne" />

            <div className="HeaderMenu-dropdownAdditionalLinks">
              <Link to="/product?category=futon&subcategory=bavlna/">Bavlna</Link>
              <Link to="/product?category=futon&subcategory=kokos/">Kokos</Link>
              <Link to="/product?category=futon&subcategory=latex/">Latex</Link>
              <Link to="/product?category=futon&subcategory=detske/">Detské</Link>
              <Link to="/product?category=futon&subcategory=masazove/">K masážam</Link>
            </div>
          </div>
          <div className="HeaderMenu-dropdownLink">
            <Link to="/product?category=sofa">
              Pohovky
              <label title="Show additional links" htmlFor="dropdownLinkTwo">
                {arrowDownIcon}
              </label>
            </Link>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkTwo" />

            <div className="HeaderMenu-dropdownAdditionalLinks">
              <Link to="/product?category=sofa&subcategory=80-90x200/">80-90x200 cm</Link>
              <Link to="/product?category=sofa&subcategory=140x200/">140x200 cm</Link>
              <Link to="/product?category=sofa&subcategory=160x200/">160x200 cm</Link>
            </div>
          </div>
          <div className="HeaderMenu-dropdownLink">
            <Link to="/product?category=bed">
              Postele
              <label title="Show additional links" htmlFor="dropdownLinkThree">
                {arrowDownIcon}
              </label>
            </Link>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkThree" />

            <div className="HeaderMenu-dropdownAdditionalLinks">
              <Link to="/product?category=bed&subcategory=90x200/">90x200 cm</Link>
              <Link to="/product?category=bed&subcategory=140x200">140x200 cm</Link>
              <Link to="/product?category=bed&subcategory=160x200">160x200 cm</Link>
              <Link to="/product?category=bed&subcategory=180x200">180x200 cm</Link>
            </div>
          </div>
          <div className="HeaderMenu-dropdownLink">
            <Link to="/product?category=add-on">
              Doplnky
              <label title="Show additional links" htmlFor="dropdownLinkFour">
                {arrowDownIcon}
              </label>
            </Link>
            <input className="HeaderMenu-hiddenInput" type="checkbox" id="dropdownLinkFour" />
            <div className="HeaderMenu-dropdownAdditionalLinks">
              <Link to="/product?category=add-on&subcategory=kresla">Kreslá</Link>
              <Link to="/product?category=add-on&subcategory=nabytok">Nábytok</Link>
              <Link to="/product?category=add-on&subcategory=vankuse">Vankúše</Link>
            </div>
          </div>
        </div>
        <div className="HeaderMenu-rightContainer">
          <div className="HeaderMenu-rightContainerDropdownLink">
            <Link to={routes.SHOWROOM}>Showroom</Link>
          </div>
          <CartContainer
            onRemoveProductClick={props.onRemoveFromCartClick}
            totalPrice={599}
            numberOfItems={3}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
