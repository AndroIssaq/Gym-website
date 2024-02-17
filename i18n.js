import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import EN from './src/langs/EN.json'
import AR from './src/langs/AR.json'
import languageDetector from 'i18next-browser-languagedetector';
const resources = {
  en: {
    translation:EN 
  },
  ar: {
    translation:AR
  }
};

i18n  
.use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react:{
        useSuspense:false
    }
  });

  export default i18n;