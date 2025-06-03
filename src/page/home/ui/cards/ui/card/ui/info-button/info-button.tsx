import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import css from './info-button.module.css'
import { useNavigate } from 'react-router-dom'

type Props = {
  id: number
}

export const InfoButton = ({ id }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onOpenInfo = () => {
    navigate(`/?modal=card-info&id=${id}`)
  }
  return (
    <Button className={css.button} onClick={onOpenInfo} variant='secondary'>
      {t('global.more')}
    </Button>
  )
}
