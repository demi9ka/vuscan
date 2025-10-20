import { Button, Modal } from '@/shared/ui'
import { useLocation } from 'react-router-dom'
import css from './wrong-url.module.css'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'

export const WrongUrl = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const opened = urlModal == 'wrong-url'

  return (
    <Modal opened={opened} className={css.modal} onClose={onClose}>
      <div className={css.center}>
        <div className={css.imageWrapper}>
          <img src='/level3.webp' alt='level3' />
        </div>
      </div>
      <p className={css.title}>{t(`modal.wrong-url.title`)}</p>
      <p className={css.text}>{t(`modal.wrong-url.text`)}</p>
      <Button variant='gradient' className={css.button} onClick={onClose}>
        {t(`global.close`)}
      </Button>
    </Modal>
  )
}
