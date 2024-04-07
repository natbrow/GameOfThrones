// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import Idioma from '../Idioma/Idioma';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Buscador from '../Buscador/Buscador';


function Menu() {
  const cambiarIdioma = (idiom) => {
    i18n.changeLanguage(idiom);
  }
  return (
    <section className='menuu'>
      <div className='conjunto'>
        <div className='div-menu'>
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
        </div>
      </div>
    </section>

  );
}

export default Menu;
