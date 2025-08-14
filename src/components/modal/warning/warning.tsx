import { Button, Modal } from '@/shared/ui'
import { useLocation } from 'react-router-dom'
import css from './warning.module.css'
import { useTranslation } from 'react-i18next'
import { useScanner } from '@/entities/scanner'
import { searchStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { useEffect, useRef } from 'react'
import { useNavigate } from '@/hooks'
import { combaneCSS } from '@/helpers'
import { toast } from '@/feature/toast'
import { LoadingDots } from './ui/loading-dots'

export const Warning = observer(() => {
  const { mutateAsync, isPending } = useScanner()
  const navigate = useNavigate()
  const location = useLocation()
  const { search, setSearch } = searchStore
  const { start } = scannerStore
  const { t } = useTranslation()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const handleStartScan = async () => {
    try {
      const res = await mutateAsync({ url: search })
      onClose()
      if (res.status === 0) {
        setSearch(res.url)
        start(res.id)
        localStorage.setItem('scannerId', res.id)
        if (res.attempsLeft) toast(t('toast.scan-left', { count: res.attempsLeft }))
      }
      if (res.status === 1) {
        navigate('/?modal=wrong-url')
      }
      if (res.status === 2) {
        setSearch(res.url)
        localStorage.setItem('scannerId', res.id)
        scannerStore.scannerId = res.id
        scannerStore.isFinished = true
        scannerStore.packages = res.data
      }
    } catch {
      onClose()
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
      <Button
        ref={buttonRef}
        variant='gradient'
        disabled={isPending}
        className={combaneCSS(css.button)}
        onClick={handleStartScan}
      >
        {isPending ? (
          <>
            {t('modal.warning.load-btn')}
            <LoadingDots />
          </>
        ) : (
          t(`modal.warning.start-btn`)
        )}
      </Button>
    </Modal>
  )
})
