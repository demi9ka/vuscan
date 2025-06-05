import { useLocation, useNavigate } from 'react-router-dom'
import css from './about-scanner.module.css'
import { Button, Modal } from '@/shared/ui'

import { useTranslation } from 'react-i18next'

export const AboutScanner = () => {
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
    <Modal title={t('header.about')} opened={opened} onClose={onClose}>
      <div className={css.scrollArea}>
        {t('modal.about-scanner.content')
          .split('\n\n')
          .map((el, i) => (
            <p key={i} className={css.info}>
              {el}
            </p>
          ))}
      </div>
      <div className={css.center}>
        <Button variant='default' className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
