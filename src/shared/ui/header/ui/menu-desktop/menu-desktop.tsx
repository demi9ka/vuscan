import { useTranslation } from 'react-i18next'
import css from './menu-desktop.module.css'
import { combaneCSS } from '@/helpers'
import { LanguageSelect } from '../language-select'
import { Button, Link } from '@/shared/ui'
import { ScanningCount } from '../scanning-count'

export const MenuDesktop = () => {
  const { t } = useTranslation()

  const onOpenContact = () => {
    window.open('https://t.me/vuscanteam', '_blank')
  }
  return (
    <nav>
      <ul className={css.wrapper}>
        <li>
          <ScanningCount />
        </li>
        <li>
          <Link to={'/?modal=privacy'} className={css.link}>
            Privacy policy
          </Link>
        </li>
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

        <Button className={css.button} onClick={onOpenContact} variant="gradient">
          {t('header.contact')}
        </Button>
      </ul>
    </nav>
  )
}
