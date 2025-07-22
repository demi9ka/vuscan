import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { languageStore } from '@/store'

export const i18next = i18n.createInstance()

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: languageStore.language,
    fallbackLng: 'ru',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json'
    }
  })

const originalSetLanguage = languageStore.setLanguage
languageStore.setLanguage = (language: 'ru' | 'en') => {
  originalSetLanguage(language)
  i18next.changeLanguage(language)
  document.documentElement.lang = language
}
