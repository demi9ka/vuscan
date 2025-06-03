import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import css from './no-thread.module.css'

export const NoThread = () => {
  const { t } = useTranslation()

  return (
    <Button className={css.button} variant='secondary'>
      {t('home.no-thread')}
    </Button>
  )
}
