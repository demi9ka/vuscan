import { makeAutoObservable } from 'mobx'

type LanguageType = 'ru' | 'en'

class LanguageStore {
  language: LanguageType = 'en'

  constructor() {
    makeAutoObservable(this)
    this.loadLanguage()
  }

  loadLanguage = () => {
    // 1. Проверяем язык в URL (самый высокий приоритет)
    const pathParts = window.location.pathname.split('/')
    const urlLang = pathParts[1] as LanguageType

    if (urlLang && this.isSupportedLanguage(urlLang)) {
      this.setLanguage(urlLang)
      return
    }

    // 2. Проверяем язык в localStorage
    const storedLang = localStorage.getItem('language') as LanguageType | null
    if (storedLang && this.isSupportedLanguage(storedLang)) {
      this.setLanguage(storedLang)
      return
    }

    // 3. Определяем язык браузера (самый сложный случай)
    const browserLang = this.detectBrowserLanguage()
    this.setLanguage(browserLang)
  }

  // Вспомогательный метод для проверки поддерживаемых языков
  private isSupportedLanguage = (lang: string): boolean => {
    return ['ru', 'en'].includes(lang)
  }

  // Метод для точного определения языка браузера
  private detectBrowserLanguage(): LanguageType {
    // Получаем все языки браузера (в порядке предпочтения)
    const browserLanguages = navigator.languages || [navigator.language]

    // Проверяем каждый язык
    for (const lang of browserLanguages) {
      const code = lang.split('-')[0].toLowerCase() as LanguageType
      if (this.isSupportedLanguage(code)) {
        return code
      }
    }

    // Язык по умолчанию, если ничего не найдено
    return 'en'
  }
  setLanguage = (language: LanguageType) => {
    this.language = language
    localStorage.setItem('language', language)
    document.documentElement.lang = language // Устанавливаем атрибут lang в <html>
  }
}

export const languageStore = new LanguageStore()
