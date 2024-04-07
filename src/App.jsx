import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'
import './App.css'
import PersonajeID from './pages/PersonajesPage/PersonajeID';
import CasasInfo from './pages/CasasPage/CasasInfo'
import CasasPage from './pages/CasasPage/CasasPage'
import Home from './pages/Home/Home'
import Menu from './Components/Menu/Menu.jsx';

function App() {


  return (
    <div>
      <Router>
        <div >
          <Menu />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/personajes/*" element={<PersonajesPage />} />
          <Route path='/personajes/:id' element={<PersonajeID />} />
          <Route path="/casas" element={<CasasPage />} />
          <Route path="/casas/:id" element={<CasasInfo />} />
        </Routes>
      </Router>
    </div>


  );

}
export default App;
