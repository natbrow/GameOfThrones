import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react'
import './App.css'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage'
import CasasPage from './pages/CasasPage/CasasPage'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage'
import Menu from './components/Menu';
import MenuPage from './pages/MenuPage.jsx/MenuPage';
import PersonajesID from './pages/PersonajesPage/PersonajeID'
import Home from './pages/Home/Home';



function App() {

  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/personajes/*" element={<PersonajesPage />} />
          <Route path='/personajes/:id' element={<PersonajesID />} />
          <Route path="/casas/*" element={<CasasPage />} />
          <Route path="/cronologia/*" element={<CronologiaPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
