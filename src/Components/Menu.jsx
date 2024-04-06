// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className='nav-menu'>
      <ul>
        <li className='nav-menu_li'>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li className='nav-menu_li'>
          <NavLink to="/personajes">
            Personajes
          </NavLink>
        </li>
        <li className='nav-menu_li'>
          <NavLink to="/casas">
            Casas
          </NavLink>
        </li>
        <li className='nav-menu_li'>
          <NavLink to="/cronologia">
            Cronología
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
