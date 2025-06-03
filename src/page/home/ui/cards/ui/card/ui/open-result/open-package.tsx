import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '@/shared/ui'
import css from './open-result.module.css'

type Props = {
  id: number
}
export const OpenPackage = ({ id }: Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const goToResult = () => {
    navigate(`/?modal=open-package&id=${id}`)
  }

  return (
    <Button onClick={goToResult} className={css.button} variant='secondary'>
      {t('home.open-package')}
    </Button>
  )
}
