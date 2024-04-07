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
                <button className='button'><img src="./public/Group.png" className='img' />
                </button>
                <img src="./public/spain.png" className='img' />
                <img src="./public/united-kingdom.png" className='img' />
            </nav>
        </section>
    )
}
