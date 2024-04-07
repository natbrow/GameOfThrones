import { useEffect, useState } from 'react'
import './Personajes.css'
import { Link } from 'react-router-dom'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import axios from 'axios'


export default function Personajes() {

  const [personajes, setPersonajes] = useState([])
  const baseUrl = 'http://localhost:3004/characters'

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
    <section className='section'>
      <SimpleBar style={{ maxHeight: 600, color: 'white' }}>
        <div className='contenedor'>
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
        </div>
      </SimpleBar>
    </section>
  )

}

