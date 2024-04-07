import React, { useEffect, useState } from 'react'
import './Personajes.css'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import Menu from '../../components/Menu'
import './Personajes.css'
import axios from 'axios'


export default function Personajes() {

  const [personajes, setPersonajes] = useState([])
  const baseUrl = 'http://localhost:3004/characters'
  const { t } = useTranslation();

  const cambiarIdioma = (idiom) => {
    i18n.changeLanguage(idiom);
  }
  const getPersonajes = async () => {
    const res = await axios.get(baseUrl)
    setPersonajes(res.data);
    // console.log(res.data);
    console.log(res.data);
  }
  useEffect(() => {

    getPersonajes();
  }, [])
  return (

    <div className='contenedor'>
      <SimpleBar style={{ maxHeight: 800, color: 'white' }}>
        <div className='cards'>
          {personajes.map((personaje, index) =>

            <figure className='card' key={index}>
              <img className='t-max' src={personaje.image} alt={personaje.name} />
              <figcaption>
                <Link to={`/personajes/${personaje.id}`}>
                  <p> {personaje.name}</p>
                </Link>
              </figcaption>
            </figure>)}
        </div>
      </SimpleBar>
    </div>
  )

}
