// import React from 'react'
// import { useTranslation } from 'react-i18next';
import './Idioma.css';

export default function Idioma() {
    // { func }
    // const { t } = useTranslation();
    return (
        <section className='menu'>
            <div className='menu-der'>
                <img src="./public/Group.png" className='img' />
                <img src="./public/spain.png" className='img' />
                <img src="./public/united-kingdom.png" className='img' />
            </div>
            {/* <div className='container-flags'>
        <img className="flag" src='https://www.arenaldesevilla.com/13535-large_default/pegatina-bandera-espana-sin-escudo-relieve.jpg' alt="bandera española" onClick={() => func('es')} />
        <img className="flag" src='https://www.banderasphonline.com/wp-content/uploads/2020/05/comprar-bandera-estados-unidos-para-mastil-exterior-interior.png' alt="bandera inglesa" onClick={() => func('en')} />
      </div> */}

        </section>
    )
}
