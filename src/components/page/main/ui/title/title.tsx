import { useTranslation } from 'react-i18next'
import css from './title.module.css'
import { observer } from 'mobx-react-lite'
import { combaneCSS } from '@/helpers'
import { scannerStore } from '@/store'

export const Title = observer(() => {
  const { t } = useTranslation()
  const { isFinished } = scannerStore
  return (
    <div className={combaneCSS(css.wrapper, isFinished ? css.finished : '')}>
      <h2 className={css.title}>{t('home.title')}</h2>
      <h3 className={css.subTitle}>{t('home.description')}</h3>
    </div>
  )
})
