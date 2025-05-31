import { languageStore } from '@/store'
import { observer } from 'mobx-react-lite'
import css from './language-select.module.css'
import { combaneCSS } from '@/helpers'

export const LanguageSelect = observer(() => {
  const { language, setLanguage } = languageStore

  return (
    <div className={css.wrapper}>
      <p onClick={() => setLanguage('ru')} className={combaneCSS(css.variant, language != 'ru' ? css.disable : '')}>
        RU
      </p>
      <div className={css.separator} />
      <p onClick={() => setLanguage('en')} className={combaneCSS(css.variant, language != 'en' ? css.disable : '')}>
        EN
      </p>
    </div>
  )
})
