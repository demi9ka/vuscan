import css from './header.module.css'
import { useMediaQuery } from '@/helpers'
import { MenuMobile } from './ui/menu-mobile'
import { MenuDesktop } from './ui/menu-desktop'

export const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h1 className={css.title}>
          <span>VU</span>
          SCAN
        </h1>
        {isMobile ? <MenuMobile /> : <MenuDesktop />}
      </div>
    </div>
  )
}
