import { useLocation, useNavigate } from 'react-router-dom'
import css from './about-scanner-modal.module.css'
import { Button, Modal } from '@/shared/ui'

import { useTranslation } from 'react-i18next'

export const AboutScannerModal = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const opened = urlModal == 'about-scanner'

  return (
    <Modal opened={opened} className={css.modal} onClose={onClose}>
      <h1 className={css.title}>{t('header.about')}</h1>
      <div className={css.scrollArea}>
        {t('header.about-scanner-content')
          .split('\n\n')
          .map((el, i) => (
            <p key={i} className={css.info}>
              {el}
            </p>
          ))}
      </div>
      <div style={{ marginTop: 40 }} className={css.center}>
        <Button variant='secondary' className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
