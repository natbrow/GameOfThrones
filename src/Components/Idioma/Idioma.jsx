// import React from 'react'
// import { useTranslation } from 'react-i18next';
import './Idioma.css';
import { NavLink } from 'react-router-dom';
// import i18n from '../src/traducciones/index.js'

export default function Idioma() {

    return (
        <section className='menu'>
            <nav className='menu-der'>
                <li>
                    <NavLink exact="true" to="/">
                        <img src="./public/Group.png" className='img' />
                    </NavLink>
                </li>
                <li>
                    <a href='/es/'>
                        <img src="./public/spain.png" className='img' />
                    </a>
                </li>
                <li>
                    <a href='/en/'>
                        <img src="./public/united-kingdom.png" className='img' />
                    </a>
                </li>
            </nav>

        </section>
    )
}
