import { useTranslation } from 'react-i18next'
import css from './not-found.module.css'
import { Seo } from '@/app'

export const NotFound = () => {
  const { t } = useTranslation()
  const seoProps = {
    title: t('seo.title-page-not-found'),
    description: t('seo.description'),
    keywords: t('seo.keywords'),
  }
  return (
    <div className={css.wrapper}>
      <Seo {...seoProps} />
      <p>Страница не найдена</p>
    </div>
  )
}
