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
            {/* <div className='container-flags'>
        <img className="flag" src='https://www.arenaldesevilla.com/13535-large_default/pegatina-bandera-espana-sin-escudo-relieve.jpg' alt="bandera española" onClick={() => func('es')} />
        <img className="flag" src='https://www.banderasphonline.com/wp-content/uploads/2020/05/comprar-bandera-estados-unidos-para-mastil-exterior-interior.png' alt="bandera inglesa" onClick={() => func('en')} />
      </div> */}

        </section>
    )
}
