// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Menu from '../src/Components/Menu/Menu.jsx'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'
import PersonajeID from './pages/PersonajesPage/PersonajeID';
import Timeline from './pages/TimeLine/TimeLine.jsx'
import CasasInfo from './pages/CasasPage/CasasInfo'
import CasasPage from './pages/CasasPage/CasasPage.jsx'
import Home from './pages/Home/Home'

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
          <Route path="/cronologia/*" element={<Timeline />} />

        </Routes>
      </Router>

    </div>


  );

}
export default App;
