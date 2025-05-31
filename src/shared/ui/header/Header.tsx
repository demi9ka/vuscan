import css from './header.module.css'
import { LanguageSelect } from './ui/language-select'
import { combaneCSS } from '@/helpers'
import { Button } from '../button'
import { Link } from 'react-router-dom'

export const Header = () => {
  const goToContact = () => {
    console.log('go to contact')
  }

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>
          <span>VU</span>
          SCAN
        </h1>
        <div className={css.flex}>
          <Link to={'/?modal=about-scanner'} className={css.link}>
            О СКАННЕРЕ
          </Link>
          <Link to={'/?modal=faq'} className={css.link}>
            FAQ
          </Link>
          <Link to={'/'} className={combaneCSS(css.link, css.disable)}>
            СКОРО
          </Link>
          <LanguageSelect />
          <Button onClick={goToContact}>Связаться с нами</Button>
        </div>
      </div>
    </div>
  )
}
