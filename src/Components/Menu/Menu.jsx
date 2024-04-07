// import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import Idioma from '../Idioma/Idioma';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


function Menu() {

  i18n.use(initReactI18next).init({
    lng: 'en', // idioma predeterminado
    fallbackLng: 'en', // idioma de reserva
    resources: {
      en: {
        translation: {

        }
      },
      es: {
        translation: {


        }
      }
    },
    interpolation: {
      escapeValue: false // No necesitas escapar las cadenas traducidas
    }
  });
  const cambiarIdioma = (idiom) => {
    i18n.changeLanguage(idiom);
  }
  return (
    <>
      <div>
        <Idioma idioma={cambiarIdioma} />
      </div>
      <nav className='nav-menu'>
        <ul>
          {/* <li className='nav-menu_li'>
            <NavLink exact="true" to="/">
              Home
            </NavLink>
          </li> */}
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
