import css from './header.module.css'
import { LanguageSelect } from './ui/language-select'
import { combaneCSS } from '@/helpers'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { AboutScannerModal } from './ui/about-scanner-modal'
import { FaqModal } from './ui/faq-modal'
import { SoonModal } from './ui/soon-modal'
import { ContactModal } from './ui/contact-modal'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>
          <span>VU</span>
          SCAN
        </h1>
        <div className={css.flex}>
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
            <Button> {t('header.contact')}</Button>
          </Link>
        </div>
      </div>
      <AboutScannerModal />
      <FaqModal />
      <SoonModal />
      <ContactModal />
    </div>
  )
}
