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
          'characters': 'characters',
          'houses': 'houses',
          'chronology': 'chronology',
          'game of thrones': 'Game of <br> Thrones',
          'house': 'house',
          'alliances': 'alliances',
          'episodes': 'episodes',
          'parents': 'parents',
          'siblings': 'siblings',
          'titles': 'titles'
          // agregar más traducciones aquí...
        }
      },
      es: {
        translation: {
          'characters': 'personajes',
          'houses': 'casas',
          'chronology': 'cronologia',
          'game of thrones': 'Juego de <br> tronos',
          'house': 'casa',
          'alliances': 'alianzas',
          'episodes': 'apariciones',
          'parents': 'padres',
          'siblings': 'descendientes',
          'titles': 'titulos',

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
              Cronologia
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
