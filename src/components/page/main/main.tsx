import css from './main.module.css'
import { Cards } from './ui/cards'
import { Search } from './ui/search'
import { Title } from './ui/title'
import { BuyAll } from './ui/buy-all'
import { useTranslation } from 'react-i18next'
import { Seo } from '@/app'

export const Main = () => {
  const { t } = useTranslation()
  const seoProps = {
    title: t('seo.title-main'),
    description: t('seo.description'),
    keywords: t('seo.keywords')
  }

  return (
    <div className={css.wrapper}>
      <Seo {...seoProps} />
      <div className={css.content}>
        <Title />
        <Search />
        <Cards />
        <BuyAll />
      </div>
    </div>
  )
}
