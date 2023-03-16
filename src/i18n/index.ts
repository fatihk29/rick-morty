import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import tr from './trTR';
import en from './enEN';

const resources = {
  tr: tr,
  en: en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  compatibilityJSON: 'v3',
  fallbackLng: ['tr', 'en'],
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export const languageOptions = [
  {
    name: 'tr',
    description: 'Türkçe',
  },

  {
    name: 'en',
    description: 'English',
  },
];

export default i18n;
