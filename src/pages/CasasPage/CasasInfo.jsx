import './CasasInfo.css';
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Idioma from '../../Components/Idioma/Idioma';
import HomeIcon from '../../Components/HomeIcon/HomeIcon';
import Menu from '../../Components/Menu/Menu';

export default function CasasInfo() {
    const baseUrl = `http://localhost:3004/houses/`;
    const [house, setHouse] = useState(null);
    const { id } = useParams();


    const getHouse = async () => {
        const res = await axios.get(baseUrl + id);
        setHouse(res.data);
    }

    useEffect(() => {
        getHouse();
    },);

    return (
        <>
            <section>
                <div>
                    <HomeIcon />
                    <Idioma />
                </div>
                <Menu />

            </section>
            <div className="cont">
                {house && (
                    <section>
                        <div className="cont-logo">
                            <img src={house.image} alt={house.name} className='cont-img' />
                            <h1>{house.name}</h1>
                        </div>

                        <div className="cont-info">
                            <h3>SEDE: <p className="cont-info_p">{house.settlement}</p></h3>
                            <h3>REGION: <p className="cont-info_p">{house.region}</p></h3>
                            <h3>ALIANZAS:
                                <div>
                                    <p className="cont-info_p">{house.alliances[0]}</p>
                                    <p className="cont-info_p">{house.alliances[1]}</p>
                                </div>
                            </h3>
                            <h3>RELIGIONES: <p className="cont-info_p">{house.religions}</p></h3>
                            <h3>FUNDACION: <p className="cont-info_p">{house.foundation}</p></h3>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
