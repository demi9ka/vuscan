import { useLocation } from 'react-router-dom'

import css from './about-scanner.module.css'
import { Button, Modal, Trans } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'

export const AboutScanner = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const opened = urlModal == 'about-scanner'

  return (
    <Modal title={t('header.about')} opened={opened} onClose={onClose}>
      <Trans
        i18nKey={'modal.about-scanner.content'}
        components={{
          h4: <h4 />,
          p: <p />,
          ul: <ul />,
          li: <li style={{ listStyleType: 'decimal' }} />
        }}
      />

      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
