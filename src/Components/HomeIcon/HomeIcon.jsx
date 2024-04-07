import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Idioma/Idioma.css'

export default function HomeIcon() {
    return (
        <>
            <NavLink className='icon-home' exact="true" to="/">
                <img src="./public/Group.png" className='img' />
            </NavLink>
        </>
    )
}
