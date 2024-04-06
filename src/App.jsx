import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu.jsx';
import CasasPage from './pages/CasasPage/CasasPage.jsx';
import Home from './pages/Home/Home.jsx';
import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx';
import CasasInfo from './pages/CasasPage/CasasInfo.jsx';

export function App() {

    return (
        <div>
            <Router>
                <div >
                    <Menu />
                </div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/personajes/*" element={<PersonajesPage />} />
                    <Route path="/casas" element={<CasasPage />} />
                    <Route path="/casas/casa.id" element={<CasasInfo />} />
                </Routes>
            </Router>
        </div>


    );


}
