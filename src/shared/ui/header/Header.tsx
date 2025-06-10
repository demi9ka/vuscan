import css from './header.module.css'
import { MenuMobile } from './ui/menu-mobile'
import { MenuDesktop } from './ui/menu-desktop'
import { useMediaQuery } from '@/hooks'

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={css.wrapper}>
      <header className={css.header}>
        <h1 className={css.title}>
          <span className={css.accent}>VU</span>
          <span>SCAN</span>
        </h1>
        {isMobile ? <MenuMobile /> : <MenuDesktop />}
      </header>
    </div>
  )
}
