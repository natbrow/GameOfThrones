// import React from 'react'
// import { useTranslation } from 'react-i18next';
import './Idioma.css';
import { NavLink } from 'react-router-dom';

export default function Idioma() {
    // { func }
    // const { t } = useTranslation();
    return (
        <nav className='menu-der'>
            <li>
                <img src="./public/spain.png" className='img' />
            </li>
            <li>
                <img src="./public/united-kingdom.png" className='img' />
            </li>
        </nav>
    )
}
