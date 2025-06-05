import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import css from './card-info.module.css'
import { useTranslation } from 'react-i18next'
import { cardsData } from '@/helpers'

type Props = {
  id: number
}

export const CardInfo = ({ id }: Props) => {
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

  if (!cardData) {
    return <></>
  }

  const opened = id == Number(urlId) && urlModal == 'card-info'
  const { color } = cardData

  const infoMapped = t(`modal.info.levels.${id}`)
    .split('\n\n')
    .map((el, i) => (
      <p key={i} className={css.info}>
        {el}
      </p>
    ))

  return (
    <Modal
      style={{
        boxShadow: `0px 0px 12px ${color}`
      }}
      opened={opened}
      onClose={onClose}
    >
      <div className={css.center}>
        <div className={css.level} style={{ color, boxShadow: `inset 0px 0px 12px ${color}` }}>
          {t(`home.levels.${id}.level`)}
        </div>
      </div>
      <h1 className={css.title}>{t(`home.levels.${id}.title`)}</h1>
      {infoMapped}
      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t(`global.close`)}
        </Button>
      </div>
    </Modal>
  )
}
