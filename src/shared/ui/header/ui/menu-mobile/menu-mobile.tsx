import { combaneCSS } from '@/helpers'
import css from './menu-mobile.module.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '../language-select'
import { useOutsideClick } from '@/hooks'
import { Link, Button, MenuBurgerIcon } from '@/shared/ui'
import { languageStore } from '@/store'
import { observer } from 'mobx-react-lite'

export const MenuMobile = observer(() => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const { language } = languageStore

  const ref = useOutsideClick(() => {
    isOpen && setIsOpen(false)
  })

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const onOpenContact = () => {
    window.open('https://t.me/vuscanteam', '_blank')
  }

  return (
    <div ref={ref} className={css.wrapper} onClick={toggleOpen}>
      <MenuBurgerIcon
        style={{
          transform: `rotate(${isOpen ? 90 : 0}deg)`,
        }}
        className={css.icon}
      />
      <nav className={combaneCSS(css.menu, language == 'he' ? css.rtl : css.ltr, isOpen ? css.opened : '')}>
        <ul>
          <li className={css.linkWrapper}>
            <Link to={'/?modal=privacy'} className={css.link}>
              Privacy policy
            </Link>
          </li>

          <li className={css.linkWrapper}>
            <Link className={css.link} to={'/?modal=about-scanner'}>
              {t('header.about')}
            </Link>
          </li>
          <li className={css.linkWrapper}>
            <Link to={'/?modal=faq'} className={css.link}>
              FAQ
            </Link>
          </li>
          <li className={css.linkWrapper}>
            <Link to={'/?modal=soon'} className={combaneCSS(css.link, css.disable)}>
              {t('header.soon')}
            </Link>
          </li>
          <LanguageSelect />
          <li>
            <Button variant="gradient" onClick={onOpenContact} className={css.button}>
              {t('header.contact')}
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
})
