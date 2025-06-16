import { Button, Modal } from '@/shared/ui'
import { useLocation, useNavigate } from 'react-router-dom'
import css from './warning.module.css'
import { useTranslation } from 'react-i18next'
import { useScanner } from '@/entities/scanner'
import { searchStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { useEffect, useRef } from 'react'

export const Warning = observer(() => {
  const { mutateAsync } = useScanner()
  const navigate = useNavigate()
  const location = useLocation()
  const { search } = searchStore
  const { start } = scannerStore
  const { t } = useTranslation()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const handleStartScan = async () => {
    const res = await mutateAsync({ url: search })
    if (res.status === 0) {
      onClose()
      start(res.id)
    }
    if (res.status === 1) {
      navigate('/?modal=wrong-url')
    }
    if (res.status === 2) {
      navigate('/?modal=queue')
    }
  }

  const opened = urlModal == 'warning'
  useEffect(() => {
    if (!opened) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && opened) {
        e.preventDefault()
        if (buttonRef.current) {
          buttonRef.current.click()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [opened])

  const textMapped = t(`modal.warning.text`)
    .split('\n\n')
    .map((el, i) => (
      <p key={i} className={css.text}>
        {el}
      </p>
    ))

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className={css.center}>
        <div className={css.imageWrapper}>
          <img src='/money.webp' alt='level3' />
        </div>
      </div>
      <p className={css.title}>{t(`modal.warning.title`)}</p>
      {textMapped}
      <p className={css.text} style={{ marginTop: '36px', marginBottom: '16px' }}>
        {t(`modal.warning.approval`)}
      </p>
      <Button ref={buttonRef} variant='gradient' className={css.button} onClick={handleStartScan}>
        {t(`modal.warning.start-btn`)}
      </Button>
    </Modal>
  )
})
