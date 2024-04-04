import React, { useEffect, useState } from 'react'
import './Personajes.css'
import axios from 'axios'

export default function Personajes() {

  const [personajes, setPersonajes] = useState([])
  const baseUrl = 'http://localhost:3004/characters'

  const getPersonajes = async () => {
    const res = await axios.get(baseUrl)
    setPersonajes(res.data);
    console.log(res.data);
  }
  useEffect(() => {

    getPersonajes();
  }, [])
  return (
    <>
      {/* <div>
        <input type="text" placeholder='Buscar...' />

      </div> */}
      <div className='contenedor'>
        {/* <div>
          <div></div>
        </div> */}
        <div className='cards'>
          {personajes.map((personaje, index) =>
            <div className='card' key={index}>
              {/* <div className='card-img'> */}
              <img className='t-max' src={personaje.image} alt={personaje.name} />
              {/* </div> */}
              <h2>{personaje.name}</h2>
              <h3>{personaje.house}</h3>
              <p>{personaje.parents}</p>

            </div>)}
        </div>
      </div>
    </>
  )
}
