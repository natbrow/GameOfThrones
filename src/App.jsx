import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Menu from './Components/Menu.jsx'
import Home from './pages/Home/Home.jsx'
// import PersonajesPage from './pages/PersonajesPage/PersonajesPage.jsx'
// import PersonajeID from './pages/PersonajesPage/PersonajeID';
import CasasPage from './pages/CasasPage/CasasPage.jsx'
import CasasInfo from './pages/CasasPage/CasasInfo.jsx'
import CronologiaPage from './pages/CronologiaPage/CronologiaPage.jsx'

function App() {
  i18n.use(initReactI18next).init({
    lng: 'en', // idioma predeterminado
    fallbackLng: 'en', // idioma de reserva
    resources: {
      en: {
        translation: {
          'characters': 'characters',
          'houses': 'houses',
          'chronology': 'chronology',
          'game of thrones': 'Game of <br> Thrones',
          'house': 'house',
          'alliances': 'alliances',
          'episodes': 'episodes',
          'parents': 'parents',
          'siblings': 'siblings',
          'titles': 'titles'
          // agregar más traducciones aquí...
        }
      },
      es: {
        translation: {
          'characters': 'personajes',
          'houses': 'casas',
          'chronology': 'cronologia',
          'game of thrones': 'Juego de <br> tronos',
          'house': 'casa',
          'alliances': 'alianzas',
          'episodes': 'apariciones',
          'parents': 'padres',
          'siblings': 'descendientes',
          'titles': 'titulos',

        }
      }
    },
    interpolation: {
      escapeValue: false // No necesitas escapar las cadenas traducidas
    }
  });
  const cambiarIdioma = (idiom) => {
    i18n.changeLanguage(idiom);
  }

  return (
    <div>
      <Router>
        <Menu func={cambiarIdioma} />
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