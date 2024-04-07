import { initReactI18next } from 'react-i18next';
import i18n from 'i18next'
import esp from './es/es.json'
import eng from './en/en.json'

i18n
    .use(initReactI18next)
    .init({
        interpolation: {
            escapeValue: false,
        },
        lng: 'es',
        fallbackLng: 'en',
        resources: {
            es: {
                translation: esp
            },
            en: {
                translation: eng,
            }
        }
    })

export default i18n
