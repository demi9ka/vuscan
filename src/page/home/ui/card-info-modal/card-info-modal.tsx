import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import { cardsData } from '../cards/constants'
import css from './card-info-modal.module.css'
import { useTranslation } from 'react-i18next'

type Props = {
  id: number
}

export const CardInfoModal = ({ id }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')
  const urlId = queryParams.get('id')

  const onClose = () => {
    navigate('/')
  }

  const cardData = cardsData.find(el => el.id == id)!

  const opened = id == Number(urlId) && urlModal == 'card-info'
  const { color } = cardData

  return (
    <Modal
      style={{
        boxShadow: `0px 0px 12px ${color}`
      }}
      opened={opened}
      className={css.modal}
      onClose={onClose}
    >
      <div className={css.center}>
        <div className={css.level} style={{ color, boxShadow: `inset 0px 0px 12px ${color}` }}>
          {t(`home.levels.${id}.level`)}
        </div>
      </div>
      <h1 className={css.title}>{t(`home.levels.${id}.title`)}</h1>
      {t(`home.levels.${id}.info`)
        .split('\n\n')
        .map((el, i) => (
          <p key={i} className={css.info}>
            {el}
          </p>
        ))}
      <div style={{ marginTop: 40 }} className={css.center}>
        <Button variant='secondary' className={css.button} onClick={onClose}>
          {t(`global.close`)}
        </Button>
      </div>
    </Modal>
  )
}
