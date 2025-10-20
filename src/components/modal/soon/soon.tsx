import { useLocation } from 'react-router-dom'
import css from './soon.module.css'
import { Button, Modal, Trans } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'

export const Soon = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const opened = urlModal == 'soon'

  return (
    <Modal opened={opened} title={t('modal.soon.title')} onClose={onClose}>
      <div className={css.content}>
        <Trans
          i18nKey={'modal.soon.content'}
          components={{
            h4: <h4 />,
            p: <p />,
            ul: <ul />,
            li: <li style={{ listStyleType: 'disc' }} />
          }}
        />
      </div>

      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
