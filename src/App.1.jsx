import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import CasasPage from './pages/CasasPage/CasasPage';
import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx';
import CasasInfo from './pages/CasasPage/CasasInfo.jsx';

export function App() {

    return (
        <div className='body'>
            <Router>
                <Menu />
                <Routes>
                    <Route path='/' element={<Menu />} />
                    <Route path="/personajes/*" element={<PersonajesPage />} />
                    <Route path="/casas" element={<CasasPage />} />
                    <Route path="/casas/casa.id" element={<CasasInfo />} />
                </Routes>
            </Router>
        </div>


    );

}
