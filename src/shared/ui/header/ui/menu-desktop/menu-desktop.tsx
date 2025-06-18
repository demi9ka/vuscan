import { useTranslation } from 'react-i18next'
import css from './menu-desktop.module.css'
import { combaneCSS } from '@/helpers'
import { LanguageSelect } from '../language-select'
import { Button, Link } from '@/shared/ui'

export const MenuDesktop = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <ul className={css.wrapper}>
        <li>
          <Link to={'/?modal=about-scanner'} className={css.link}>
            {t('header.about')}
          </Link>
        </li>
        <li>
          <Link to={'/?modal=faq'} className={css.link}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to={'/?modal=soon'} className={combaneCSS(css.link, css.disable)}>
            {t('header.soon')}
          </Link>
        </li>
        <LanguageSelect />
        <Link to={'/?modal=contact'} className={css.link}>
          <Button className={css.button} variant='gradient'>
            {t('header.contact')}
          </Button>
        </Link>
      </ul>
    </nav>
  )
}
