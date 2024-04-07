// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import Idioma from '../Idioma/Idioma';


function Menu() {

  return (
    <>
      <div>
        <Idioma />
      </div>
      <nav className='nav-menu'>
        <ul>
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
              Cronologia
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
