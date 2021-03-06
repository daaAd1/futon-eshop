import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/admin/AdminMenu.css';
import * as routes from '../constants/routes';

class AdminMenu extends React.Component {
  render() {
    return (
      <div className="AdminMenu">
        <p>ADMIN</p>
        <NavLink to={routes.ADMIN_ORDERS}>Objednávky</NavLink>
        <NavLink to={routes.ADMIN_PRODUCTS}>Produkty</NavLink>
        <NavLink to={routes.ADMIN_TYPES}>Typy</NavLink>
        <NavLink to={routes.ADMIN_ATTRIBUTES}>Atribúty</NavLink>
        <NavLink to={routes.ADMIN_INFORMATION}>Informácie</NavLink>
      </div>
    );
  }
}

export default AdminMenu;
