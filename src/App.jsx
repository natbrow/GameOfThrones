import { useState } from 'react'
import Timeline from './pages/TimeLine/TimeLine.jsx'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu.jsx'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'
import './App.css'
import PersonajeID from './pages/PersonajesPage/PersonajeID';
import CasasInfo from './pages/CasasPage/CasasInfo'
import Casas from './pages/CasasPage/CasasPage.jsx'
import Home from './pages/Home/Home'
import Volver from './Components/Volver/Volver.jsx';

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
          <Route path='/personaje/:id' element={<PersonajeID />} />
          <Route path="/casas" element={<Casas />} />
          <Route path="/casas/:id" element={<CasasInfo />} />
          <Route path="/cronologia" element={<Timeline />} />
        </Routes>
      </Router>
    </div>
  );

}
export default App;
