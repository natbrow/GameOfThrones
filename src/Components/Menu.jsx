// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <nav className='nav-menu'>
      <ul>
        <li>
          <NavLink exact="true" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/personajes">
            Personajes
          </NavLink>
        </li>
        <li>
          <NavLink to="/casas">
            Casas
          </NavLink>
        </li>
        <li>
          <NavLink to="/cronologia">
            Cronología
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
