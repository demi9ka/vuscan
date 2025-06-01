import css from './header.module.css'
import { useMediaQuery } from '@/helpers'
import { AboutScannerModal } from './ui/about-scanner-modal'
import { FaqModal } from './ui/faq-modal'
import { SoonModal } from './ui/soon-modal'
import { ContactModal } from './ui/contact-modal'
import { MenuDesktop, MenuMobile } from './ui/menu'

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
      <AboutScannerModal />
      <FaqModal />
      <SoonModal />
      <ContactModal />
    </div>
  )
}
