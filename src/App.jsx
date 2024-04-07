import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu.jsx'
import Home from './pages/Home/Home.jsx'
// import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'
// import PersonajeID from './pages/PersonajesPage/PersonajeID';
import CasasPage from './pages/CasasPage/CasasPage.jsx'
import CasasInfo from './pages/CasasPage/CasasInfo.jsx'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage.jsx'


function App() {


  return (
    <div >
      <Router>

        <Menu />

        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/personajes/*" element={<PersonajesPage />} /> */}
          {/* <Route path="/personajes/:id" element={<PersonajeID />} /> */}
          <Route path="/casas/*" element={<CasasPage />} />
          <Route path="/casas/:id" element={<CasasInfo />} />
          <Route path="/cronologia/*" element={<CronologiaPage />} />
        </Routes>
      </Router>
    </div>
  );

}
export default App;