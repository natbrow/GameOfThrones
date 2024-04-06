import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
import { useTranslation } from 'react-i18next';


function Menu({ func }) {
  const { t } = useTranslation();
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
      {/* <div className='container-flags'>
        <img className="flag" src='https://www.arenaldesevilla.com/13535-large_default/pegatina-bandera-espana-sin-escudo-relieve.jpg' alt="bandera española" onClick={() => func('es')} />
        <img className="flag" src='https://www.banderasphonline.com/wp-content/uploads/2020/05/comprar-bandera-estados-unidos-para-mastil-exterior-interior.png' alt="bandera inglesa" onClick={() => func('en')} />
      </div> */}
    </nav>
  );
}

export default Menu;
