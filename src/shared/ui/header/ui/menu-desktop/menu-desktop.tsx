import { useTranslation } from 'react-i18next'
import css from './menu-desktop.module.css'
import { combaneCSS } from '@/helpers'
import { Button } from '@/shared/ui/button'
import { Link } from 'react-router-dom'
import { LanguageSelect } from '../language-select'

export const MenuDesktop = () => {
  const { t } = useTranslation()
  return (
    <div className={css.wrapper}>
      <Link to={'/?modal=about-scanner'} className={css.link}>
        {t('header.about')}
      </Link>
      <Link to={'/?modal=faq'} className={css.link}>
        FAQ
      </Link>
      <Link to={'/?modal=soon'} className={combaneCSS(css.link, css.disable)}>
        {t('header.soon')}
      </Link>
      <LanguageSelect />
      <Link to={'/?modal=contact'} className={css.link}>
        <Button className={css.button} variant='gradient'>
          {t('header.contact')}
        </Button>
      </Link>
    </div>
  )
}
