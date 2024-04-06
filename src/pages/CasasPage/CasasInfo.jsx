import './CasasInfo.css';
import axios from "axios";
import { useState, useEffect } from "react";

export default function CasasInfo({ casa }) {
    const baseUrl = `http://localhost:3000/houses/`;
    const [house, setHouse] = useState(null);

    useEffect(() => {
        const getHouse = async () => {
            const res = await axios.get(baseUrl + casa.id);
            setHouse(res.data);
        };
        getHouse();
    }, [baseUrl, casa.id]);

    return (
        <div className="cont">
            {house && (
                <section>
                    <div className="cont-logo">
                        <img src={house.image} alt={house.name} />
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
    );
}
