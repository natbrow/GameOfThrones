import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/Menu'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'


import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path="/personajes/*" element={<PersonajesPage />} />
          {/* <Route path="/casas/*" element={<CasasPage />} /> */}
          {/* <Route path="/cronologia/*" element={<CronologiaPage />} /> */}
        </Routes>
      </Router>
    </div>
  );

}

export default App;
