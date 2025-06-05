import { useLocation, useNavigate } from 'react-router-dom'
import css from './soon.module.css'
import { Button, Modal } from '@/shared/ui'
import { useTranslation } from 'react-i18next'

export const Soon = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const opened = urlModal == 'soon'

  const contentMapped = t('modal.soon.content')
    .split('\n\n')
    .map((el, i) => (
      <p key={i} className={css.info}>
        {el}
      </p>
    ))

  return (
    <Modal opened={opened} title={t('modal.soon.title')} onClose={onClose}>
      <div className={css.scrollArea}>{contentMapped}</div>
      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
