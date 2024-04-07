import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SimpleBar from 'simplebar-react';
import axios from 'axios';



export default function Personajes() {

    const [personajes, setPersonajes] = useState([]);
    const baseUrl = 'http://localhost:3000/characters';

    const getPersonajes = async () => {
        const res = await axios.get(baseUrl);
        setPersonajes(res.data);
        // console.log(res.data);
        console.log(res.data);
    };
    useEffect(() => {

        getPersonajes();
    }, []);
    return (

        <div className='contenedor'>
            <SimpleBar style={{ maxHeight: 700, color: 'white' }}>
                <div className='cards'>
                    {personajes.map((personaje, index) => <figure className='card' key={index}>
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
    );

}
