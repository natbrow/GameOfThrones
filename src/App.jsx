import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Menu from './Components/Menu';
import PersonajesPage from './pages/PersonajesPage/PersonajesPage'
import CasasPage from './pages/CasasPage/CasasPage'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage'
import MenuPage from './pages/MenuPage.jsx/MenuPage';

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
