import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu.jsx'
import Home from './pages/Home/Home.jsx'
import CasasPage from './pages/CasasPage/CasasPage.jsx'
import CasasInfo from './pages/CasasPage/CasasInfo.jsx'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage.jsx'
import PersonajesPage from './pages/PersonajesPage/Personajes.jsx';
import PersonajesID from './pages/PersonajesPage/PersonajeID'




function App() {


  return (
    <div >
      <Router>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/personajes/*" element={<PersonajesPage />} />
          <Route path='/personajes/:id' element={<PersonajesID />} />
          <Route path="/casas/*" element={<CasasPage />} />
          <Route path="/casas/:id" element={<CasasInfo />} />
          <Route path="/cronologia/*" element={<CronologiaPage />} />
        </Routes>
      </Router>

    </div>
  );


}
export default App;


