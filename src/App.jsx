import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Menu from './Components/Menu';
import PersonajesPage from './pages/PersonajesPage/PersonajesPage'
import CasasPage from './pages/CasasPage/CasasPage'


function App() {

  return (
    <div className='body'>
      <Router>
        <Menu />
        <Routes>
          {/* <Route path='/' element={<MenuPage />} /> */}
          <Route path="/personajes/*" element={<PersonajesPage />} />
          <Route path="/casas/*" element={<CasasPage />} />
          {/* <Route path="/cronologia/*" element={<CronologiaPage />} /> */}
        </Routes>
      </Router>
    </div>
  );

}

export default App;
