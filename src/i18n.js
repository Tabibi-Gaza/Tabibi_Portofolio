import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import en from './locales/en.json';

const STORAGE_KEY = 'tabibi-lang';

export function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ar') return saved;
  } catch (e) {
    /* localStorage unavailable */
  }
  return 'ar'; // Arabic is the default language
}

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: getInitialLang(),
  fallbackLng: 'ar',
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export function applyDocumentLang(lang) {
  const html = document.documentElement;
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  html.setAttribute('data-theme', html.getAttribute('data-theme') || 'light');
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* ignore */
  }
}

export default i18n;
