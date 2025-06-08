import { useTranslation } from 'react-i18next'
import css from './title.module.css'

export const Title = () => {
  const { t } = useTranslation()
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>{t('home.title')}</h1>
      <h3 className={css.subTitle}>{t('home.description')}</h3>
    </div>
  )
}
