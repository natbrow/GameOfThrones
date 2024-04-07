// import React from 'react'
import './Buscador.css';

export default function Buscador() {
    return (
        <div>
            <div className='menu-izq'>
                <img src="./public/search.png" />
                <input type='text' className='menu-izq-tipo' placeholder='Buscar...' />
            </div>
        </div>
    )
}
