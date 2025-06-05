import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import css from './warning.module.css'
import { useTranslation } from 'react-i18next'
import { useScanner } from '@/entities/scanner'
import { searchStore } from '@/store/search-store'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'

export const Warning = observer(() => {
  const { mutateAsync } = useScanner()
  const navigate = useNavigate()
  const location = useLocation()
  const { search } = searchStore
  const { start } = scannerStore
  const { t } = useTranslation()

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const handleStartScan = async () => {
    const res = await mutateAsync({ url: search })
    if (res.status === 0) start(res.id)
    if (res.status === 1) navigate('/?modal=wrong-url')
    if (res.status === 2) navigate('/?modal=queue')
    onClose()
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
      <Button variant='gradient' className={css.button} onClick={handleStartScan}>
        {t(`home.warning.start-btn`)}
      </Button>
    </Modal>
  )
})
