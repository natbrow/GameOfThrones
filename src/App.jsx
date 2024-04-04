<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
=======
import { useState } from 'react'
>>>>>>> develop
import './App.css'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage'
import CasasPage from './pages/CasasPage/CasasPage'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage'
import Menu from './Components/Menu';
import MenuPage from './pages/MenuPage.jsx/MenuPage';



function App() {
<<<<<<< HEAD
  return (
    <div>
    <Router>
      <Menu />
        <Routes>
        <Route path='/' element={<MenuPage/>} />
        <Route path="/personajes/*" element={<PersonajesPage />} />
        <Route path="/casas/*" element={<CasasPage />} />
        <Route path="/cronologia/*" element={<CronologiaPage />} />
      </Routes>
      </Router>
    </div>
  );
=======

  return (
    <>

    </>
  )
>>>>>>> develop
}

export default App;
