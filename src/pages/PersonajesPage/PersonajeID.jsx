import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import './Personajes.css'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';



export default function Personaje() {
    const [character, setCharacter] = useState()
    // const [house, setHouse] = useState([]);
    const { id } = useParams();

    // const getHouse = async () => {
    //     const res = await axios.get('http://localhost:3004/houses');
    //     console.log(res.data);
    //     setHouse(res.data)
    // }

    const getCharacter = async () => {
        const res = await axios.get('http://localhost:3004/characters/' + id)
        setCharacter(res.data)
        console.log(res.data);

    }

    useEffect(() => {
        // getHouse();

        getCharacter()

    }, [])
    return (
        <>
            {character &&
                <section className="section">

                    <div className='contenedor-img'>
                        <figure>
                            <img className="image-info" src={"/public" + character.image} alt={character.name} />
                        </figure>
                        <h2>{character.name}</h2>
                    </div>
                    <div className="contenedor-info">
                        <section className="titles">
                            <div>
                                <h3>House </h3>
                                <img src={character.house} alt="" />
                            </div>
                            <div>
                                <h3>Alliances</h3>
                                <p>

                                    {character.alliances}
                                </p>

                            </div>
                            <div>
                                <h3>Episodes</h3>

                                <SimpleBar style={{ maxHeight: 100, color: 'white' }}>
                                    <ul>
                                        {character.episodes.map((episode, episodeIndex) => (
                                            <li key={episodeIndex}>{episode}</li>
                                        ))}
                                    </ul>
                                </SimpleBar>
                            </div>
                            <div>
                                <h3>Parents</h3>

                                <ul>
                                    {character.parents.map((parent, parentIndex) => (
                                        <li key={parentIndex}>{parent}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3>Siblings</h3>
                                <ul>
                                    {character.siblings.map((sibling, siblingIndex) => (
                                        <li key={siblingIndex}>{sibling}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3>Titles</h3>
                                <SimpleBar style={{ maxHeight: 70, color: 'white' }}>
                                    <ul>
                                        {character.titles.map((title, titleIndex) => (
                                            <li key={titleIndex}>{title}</li>
                                        ))}
                                    </ul>
                                </SimpleBar>

                            </div>
                        </section>
                    </div>
                </section>}
        </>
    );

}