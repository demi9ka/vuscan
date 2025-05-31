import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpBackend from 'i18next-http-backend'
import { languageStore } from '@/store'

export const i18next = i18n
  .use(HttpBackend) // загрузка переводов по HTTP
  .use(initReactI18next) // интеграция с React
  .init({
    fallbackLng: languageStore.language, // язык по умолчанию
    debug: false,
    interpolation: {
      escapeValue: false // React сам экранирует значения
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json' // путь к переводам
    }
  })
