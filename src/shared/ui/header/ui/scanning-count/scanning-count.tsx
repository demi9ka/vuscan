import { useScannerCount } from '@/entities'
import css from './scanning-count.module.css'
import { useTranslation } from 'react-i18next'

export const ScanningCount = () => {
  const { data, isLoading } = useScannerCount()
  const { t } = useTranslation()

  if (!data || isLoading) return <></>

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{t('header.scanner-count-title')}</p>
      <h4 className={css.count}>{t('header.scanner-count', { count: data.count })}</h4>
    </div>
  )
}
