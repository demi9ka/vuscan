import { combaneCSS } from '@/helpers'
import css from './menu-mobile.module.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '../language-select'
import { useOutsideClick } from '@/hooks'
import { Link, Button, MenuBurgerIcon } from '@/shared/ui'

export const MenuMobile = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const ref = useOutsideClick(() => {
    isOpen && setIsOpen(false)
  })

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div ref={ref} className={css.wrapper} onClick={toggleOpen}>
      <MenuBurgerIcon
        style={{
          transform: `rotate(${isOpen ? 90 : 0}deg)`
        }}
        className={css.icon}
      />
      <nav className={combaneCSS(css.menu, isOpen ? css.opened : '')}>
        <ul>
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
            <Link to={'/?modal=contact'}>
              <Button variant='gradient' className={css.button}>
                {t('header.contact')}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
