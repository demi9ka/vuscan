import { makeAutoObservable } from 'mobx'

type LanguageType = 'ru' | 'en'

class LanguageStore {
  language: LanguageType = 'ru'

  constructor() {
    makeAutoObservable(this)
    this.loadLanguage()
  }

  loadLanguage = () => {
    const storageLanguage: string | null = localStorage.getItem('language')
    if (storageLanguage) {
      this.setLanguage(storageLanguage as LanguageType)
    } else {
      localStorage.setItem('language', 'ru')
    }
  }

  setLanguage = (language: LanguageType) => {
    this.language = language
    localStorage.setItem('language', language)
  }
}

export const languageStore = new LanguageStore()
