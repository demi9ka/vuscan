import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import css from './wrong-url.module.css'
import { useTranslation } from 'react-i18next'

export const WrongUrl = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const opened = urlModal == 'wrong-url'

  return (
    <Modal opened={opened} className={css.modal} onClose={onClose}>
      <div className={css.center}>
        <div className={css.imageWrapper}>
          <img src='/level3.png' alt='' />
        </div>
      </div>
      <h1 className={css.title}>{t(`home.wrong-url-modal.title`)}</h1>
      <p className={css.text}>{t(`home.wrong-url-modal.text`)}</p>
      <Button variant='gradient' className={css.button} onClick={onClose}>
        {t(`global.close`)}
      </Button>
    </Modal>
  )
}
