import axios from "axios"
import './CasasPage.css'
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
    <div className="contC">
      {casas.map((casa, index) =>
        <div key={index} className="contC-logo">
          <section>
            <div>
              <img src={casa.image} className="contC-i" />
              <p className="contC-p">{casa.name}</p>
            </div>
          </section>
        </div>)}
    </div>
  )
}
