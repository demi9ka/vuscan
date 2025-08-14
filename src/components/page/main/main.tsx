import css from './main.module.css'
import { Cards } from './ui/cards'
import { Search } from './ui/search'
import { Title } from './ui/title'
import { BuyAll } from './ui/buy-all'
import { useTranslation } from 'react-i18next'
import { Seo } from '@/app'
import { useMediaQuery } from '@/hooks'
import { ScanningCount } from '@/shared/ui/header/ui/scanning-count'

export const Main = () => {
  const { t } = useTranslation()
  const seoProps = {
    title: t('seo.title-main'),
    description: t('seo.description'),
    keywords: t('seo.keywords')
  }

  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={css.wrapper}>
      <Seo {...seoProps} />
      <div className={css.content}>
        {isMobile && <ScanningCount />}
        <Title />
        <Search />
        <Cards />
        <BuyAll />
      </div>
    </div>
  )
}
