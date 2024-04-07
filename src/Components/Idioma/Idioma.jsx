// import React from 'react'
// import { useTranslation } from 'react-i18next';
import './Idioma.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Idioma() {
    const { t, i18n } = useTranslation();
    const cambiarIdioma = (idioma) => {
        i18n.changeLanguage(idioma)
    }
    return (
        <section className='menu'>
            <nav className='menu-der'>
                <li>
                    <NavLink exact="true" to="/">
                        <img src="./public/Group.png" className='img' />
                    </NavLink>
                </li>
                <li>
                    <button onClick={() => cambiarIdioma('en')}>{t('EN')}</button>
                    {/* <a href='/es/'>
                        <img src="./public/spain.png" className='img' />
                    </a> */}
                </li>
                <li>
                    <button onClick={() => cambiarIdioma('es')}>{t('ES')}</button>
                    {/* <a onClick={() => cambiarIdioma('en')}>{t(
                        < img src="./public/united-kingdom.png" className='img' />)}</a> */}
                </li>
            </nav>

        </section>
    )
}
