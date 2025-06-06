import { combaneCSS, useOutsideClick } from '@/helpers'
import css from './menu-mobile.module.css'
import { useState } from 'react'
import { MenuBurgerIcon } from '@/shared/ui/svg'
import { Link } from 'react-router-dom'
import { Button } from '@/shared/ui/button'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '../language-select'

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
          transition: '.1s',
          transform: `rotate(${isOpen ? 90 : 0}deg)`
        }}
      />
      <div className={combaneCSS(css.menu, isOpen ? css.opened : '')}>
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
        <Link
          style={{
            padding: 0
          }}
          to={'/?modal=contact'}
          className={css.link}
        >
          <Button variant='gradient' className={css.button}>
            {t('header.contact')}
          </Button>
        </Link>
      </div>
    </div>
  )
}
