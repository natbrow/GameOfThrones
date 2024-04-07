// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from '../src/Components/Menu/Menu.jsx'
import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'
import './App.css'
import PersonajeID from './pages/PersonajesPage/PersonajeID.jsx';
import CasasInfo from './pages/CasasPage/CasasInfo.jsx'
import CasasPage from './pages/CasasPage/CasasPage.jsx'
import Home from './pages/Home/Home.jsx'

function App() {


  return (
    <div>
      <Router>
        <div >
          <Menu
          />
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
