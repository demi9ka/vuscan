import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import { cardsData } from '../cards/constants'
import css from './card-info-modal.module.css'

type Props = {
  id: number
}

export const CardInfoModal = ({ id }: Props) => {
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
  const { color, title, info, level } = cardData

  return (
    <Modal
      opened={opened}
      style={{
        width: 700,
        boxShadow: `0px 0px 12px ${color}`
      }}
      onClose={onClose}
    >
      <div className={css.center}>
        <div className={css.level} style={{ color, boxShadow: `inset 0px 0px 12px ${color}` }}>
          {level}
        </div>
      </div>
      <h1 className={css.title}>{title}</h1>
      {info.split('\n\n').map((el, i) => (
        <p key={i} className={css.info}>
          {el}
        </p>
      ))}
      <div style={{ marginTop: 40 }} className={css.center}>
        <Button variant='secondary' className={css.button} onClick={onClose}>
          ЗАКРЫТЬ
        </Button>
      </div>
    </Modal>
  )
}
