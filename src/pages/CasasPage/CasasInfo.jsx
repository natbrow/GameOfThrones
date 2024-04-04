import axios from "axios"
import './CasasInfo.css'
import { useState, useEffect } from "react"


export default function Casas() {

    const baseUrl = `http://localhost:3000/houses`
    const [casas, setCasas] = useState([])
    // const [name, setName] = useState(1)

    // const nameCasas = (newName) => {
    //     setName(newName)
    //     getCasas(newName)
    // }

    const getCasas = async () => {
        const res = await axios.get(baseUrl)
        console.log(res.data);
        setCasas(res.data)

    }
    useEffect(() => {
        getCasas();

    },)

    return (
        <div className="cont">
            {casas.map((casa, index) =>
                <div key={index}>
                    <section className="cont-logo">
                        <div>
                            <img src={casa.image} />
                            <p>{casa.name}</p>
                        </div>

                        <div className="cont-info">
                            <p>SEDE: {casa.settlement}</p>
                            <p>REGION: {casa.region}</p>
                            <p>ALIANZAS: {casa.alliances[0]} {" "} {casa.alliances[1]}</p>
                            <p>RELIGIONES: {casa.religions}</p>
                            <p>FUNDACION: {casa.foundation}</p>
                        </div>
                    </section>
                </div>)}
        </div>
    )
}
