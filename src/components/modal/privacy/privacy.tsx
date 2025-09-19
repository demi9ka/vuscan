import { useLocation } from 'react-router-dom'
import { Button, Modal, Trans } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'
import css from './privacy.module.css'

export const Privacy = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const opened = urlModal == 'privacy'

  return (
    <Modal title={'Privacy policy'} opened={opened} onClose={onClose}>
      <Trans
        i18nKey={'modal.privacy.content'}
        components={{
          h3: <h3 className={css.subTitle} />,
          h2: <h2 className={css.title} />,
          ul: <ul />,
          li: <li />,
        }}
      />

      <div className={css.center}>
        <Button variant="default" className={css.button} onClick={onClose}>
          {t('global.close')}
        </Button>
      </div>
    </Modal>
  )
}
