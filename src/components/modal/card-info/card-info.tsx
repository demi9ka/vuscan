import { Button, Modal, Trans } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import css from './card-info.module.css'
import { useTranslation } from 'react-i18next'
import { cardsData } from '@/helpers'
import { useMediaQuery } from '@/hooks'
import { Level } from '@/shared/ui/level'
import React from 'react'

type Props = {
  id: number
}

export const CardInfo = ({ id }: Props) => {
  const isMobile = useMediaQuery('(max-width: 480px)')
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

  return (
    <Modal
      className={css.modal}
      style={
        {
          '--primary-color': color
        } as React.CSSProperties
      }
      title={isMobile ? t(`home.levels.${id}.title`) : ''}
      opened={opened}
      onClose={onClose}
    >
      <div className={css.center}>
        <div className={css.levelWrapper}>
          <Level color={color} text={t(`home.levels.${id}.level`)} />
        </div>
      </div>
      {isMobile ? <></> : <h3 className={css.title}>{t(`home.levels.${id}.title`)}</h3>}

      <Trans
        i18nKey={t(`modal.info.levels.${id}`)}
        components={{
          h4: <h4 />,
          p: <p />,
          'p-accent': <p className={css.accent} />,
          ul: <ul />,
          li: <li style={{ listStyleType: 'decimal' }} />,
          bold: <span className={css.bold} />
        }}
      />

      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t(`global.close`)}
        </Button>
      </div>
    </Modal>
  )
}
