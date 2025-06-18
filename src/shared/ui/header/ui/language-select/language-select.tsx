import { languageStore } from '@/store'
import { observer } from 'mobx-react-lite'
import css from './language-select.module.css'
import { combaneCSS } from '@/helpers'
import { useNavigate } from '@/hooks'

export const LanguageSelect = observer(() => {
  const { language, setLanguage } = languageStore
  const navigate = useNavigate()

  const changeLanguage = (lng: 'ru' | 'en') => {
    setLanguage(lng)
    navigate(`/${lng}${location.pathname.slice(3)}`)
  }

  return (
    <div className={css.wrapper}>
      <p onClick={() => changeLanguage('ru')} className={combaneCSS(css.variant, language != 'ru' ? css.disable : '')}>
        RU
      </p>
      <div className={css.separator} />
      <p onClick={() => changeLanguage('en')} className={combaneCSS(css.variant, language != 'en' ? css.disable : '')}>
        EN
      </p>
    </div>
  )
})
