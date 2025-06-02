import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import css from './warning.module.css'
import { useTranslation } from 'react-i18next'

export const WarningModal = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const opened = urlModal == 'warning'

  return (
    <Modal opened={opened} className={css.modal} onClose={onClose}>
      <div className={css.center}>
        <div className={css.imageWrapper}>
          <img src='/money.png' alt='' />
        </div>
      </div>
      <h1 className={css.title}>{t(`home.warning.title`)}</h1>
      {t(`home.warning.text`)
        .split('\n\n')
        .map((el, i) => (
          <p key={i} className={css.text}>
            {el}
          </p>
        ))}

      <p className={css.text} style={{ marginTop: '36px', marginBottom: '16px' }}>
        {t(`home.warning.approval`)}
      </p>
      <Button variant='primary' className={css.button} onClick={onClose}>
        {t(`home.warning.start-btn`)}
      </Button>
    </Modal>
  )
}
