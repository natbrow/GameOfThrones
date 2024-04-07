// import React from 'react'
// import { useTranslation } from 'react-i18next';
import './Idioma.css';
import { NavLink } from 'react-router-dom';

export default function Idioma() {
    // { func }
    // const { t } = useTranslation();
    return (
        <section className='menu'>
            <nav className='menu-der'>
                <li>
                    <NavLink exact="true" to="/">
                        <img src="./public/Group.png" className='img' />
                    </NavLink>
                </li>
                <li>
                    <img src="./public/spain.png" className='img' />
                </li>
                <li>
                    <img src="./public/united-kingdom.png" className='img' />
                </li>
            </nav>

        </section>
    )
}
