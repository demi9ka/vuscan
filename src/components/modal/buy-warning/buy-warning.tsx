import { Button, Modal } from '@/shared/ui'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useBuyAllPackages, useBuyPackage } from '@/entities/scanner'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { useEffect, useRef } from 'react'
import { useNavigate } from '@/hooks'
import { LoadingDots } from './ui/loading-dots'
import { PaymentStorageType, paymentStore } from '@/store/payment-store'
import css from './buy-warning.module.css'

export const BuyWarning = observer(() => {
  const { mutateAsync: buyAllPackagesMutateAsync, isPending: buyAllPackagesIsPending } = useBuyAllPackages()
  const { mutateAsync: buyPackageMutateAsync, isPending: buyPackageIsPending } = useBuyPackage()

  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { scannerId } = scannerStore
  const { checkPayment } = paymentStore

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')
  const packageId = parseInt(queryParams.get('packageId') || '')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const handleBuy = async () => {
    try {
      if (!scannerId) return

      const { url, orderId } = isFinite(packageId)
        ? await buyPackageMutateAsync({
            packageId,
            scannerId,
          })
        : await buyAllPackagesMutateAsync({
            scannerId,
          })
      const paymentsId = JSON.parse(localStorage.getItem('paymentsId') || '[]') as PaymentStorageType[]
      if (paymentsId.find(el => el.orderId == orderId)) return
      localStorage.setItem('paymentsId', JSON.stringify([...paymentsId, { packageId, orderId }]))
      window.open(url, '_blank')
      checkPayment(orderId, packageId)
    } finally {
      onClose()
    }
  }

  const opened = urlModal == 'buy-warning'
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

  const textMapped = t(`modal.buy-warning.text`)
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
          <img src="/money.webp" alt="level3" />
        </div>
      </div>
      <p className={css.title}>{t(`modal.buy-warning.title`)}</p>
      {textMapped}
      <Button ref={buttonRef} variant="gradient" disabled={buyAllPackagesIsPending || buyPackageIsPending} className={css.button} onClick={handleBuy}>
        {buyAllPackagesIsPending || buyPackageIsPending ? (
          <>
            {t('modal.warning.load-btn')}
            <LoadingDots />
          </>
        ) : (
          t(`modal.buy-warning.start-btn`)
        )}
      </Button>
    </Modal>
  )
})
