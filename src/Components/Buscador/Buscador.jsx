import React from 'react'
import './Buscador.css';

export default function Buscador() {
    return (
        <>
            <img className='search' src="./public/search.png" />
            <input type='text' className='menu-izq-tipo' placeholder='Buscar...' />
        </>

    )
}
