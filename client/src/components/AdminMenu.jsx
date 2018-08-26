import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/AdminMenu.css';
import * as routes from '../routes';

class AdminMenu extends React.Component {
  render() {
    return (
      <div className="AdminMenu">
        <p>ADMIN</p>
        <NavLink to={routes.ADMIN_ORDERS}>Objednávky</NavLink>
        <NavLink to={routes.ADMIN_PRODUCTS}>Produkty</NavLink>
        <NavLink to={routes.ADMIN_ATTRIBUTES}>Atribúty</NavLink>
      </div>
    );
  }
}

export default AdminMenu;
