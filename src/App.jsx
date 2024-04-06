
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'

import PersonajesPage from './pages/PersonajesPage/PersonajesPage'
import CasasPage from './pages/CasasPage/CasasPage'


function App() {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<MenuPage />} />
          <Route path="/personajes/*" element={<PersonajesPage />} />
          <Route path="/casas/*" element={<CasasPage />} />
          <Route path="/cronologia/*" element={<CronologiaPage />} />
        </Routes>

      </Router>
    </div>


  );

}

export default App;
