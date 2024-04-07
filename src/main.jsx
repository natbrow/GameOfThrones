import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import { I18nextProvider } from 'react-i18next'
// import i18next from '../src/traducciones/index'
// import global_en from './traducciones/en'
// import global_es from './traducciones/es'


// i18next.init({
//   interpolation: {
//     escapeValue: false,
//     lng: 'es',
//     //  window.location.pathname.substr(1, 2) === 'es' ? 'es' : 'en',
//     resources: {
//       es: {
//         global: global_es
//       },
//       en: {
//         global: global_en,
//       }
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <I18nextProvider i18n={i18next}> */}
    <App />
    {/* </I18nextProvider> */}
  </React.StrictMode>,

)


