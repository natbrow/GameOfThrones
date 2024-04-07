import axios from "axios";
import './Casas.css';
import { useState, useEffect } from "react";
// import CasasInfo from "./CasasInfo";
import { Link } from "react-router-dom";
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';


export default function Casas() {
  const baseUrl = `http://localhost:3004/houses`;
  const [casas, setCasas] = useState([]);

  const getCasas = async () => {
    const res = await axios.get(baseUrl);
    setCasas(res.data);
  };

  useEffect(() => {
    getCasas();
  }, []);



  return (
    // <section className='section'>
    //   <SimpleBar style={{ maxHeight: 600, color: 'white' }}>
    <div className="contC">
      {casas.map((casa, index) => (
        <div key={index} > {/* onClick={() => handleClickCasa(casa)} */}
          <section className="contC-b">
            <img src={casa.image} className="contC-i" alt={casa.name} />
            <Link to={`/casas/${casa.id}`}>
              <h1 className="contC-h1"> {casa.name}</h1>
            </Link>
          </section>
        </div>

      ))}
    </div>
    //   </SimpleBar >
    // </section >
  );
}
