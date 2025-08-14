import { Button, Modal } from '@/shared/ui'
import { useLocation } from 'react-router-dom'
import css from './buy-warning.module.css'
import { useTranslation } from 'react-i18next'
import { useBuyAllPackages, useBuyPackage } from '@/entities/scanner'

import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { useEffect, useRef } from 'react'
import { useNavigate } from '@/hooks'

import { LoadingDots } from './ui/loading-dots'

export const BuyWarning = observer(() => {
  const { mutateAsync: buyAllPackagesMutateAsync, isPending: buyAllPackagesIsPending } = useBuyAllPackages()
  const { mutateAsync: buyPackageMutateAsync, isPending: buyPackageIsPending } = useBuyPackage()

  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { scannerId } = scannerStore

  const queryParams = new URLSearchParams(location.search)

  const urlModal = queryParams.get('modal')
  const packageId = queryParams.get('packageId')
  const isFullBuy = queryParams.get('isFullBuy')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const handleBuy = async () => {
    try {
      if (!scannerId) return
      if (packageId) {
        const { result } = await buyPackageMutateAsync({
          packageId: parseInt(packageId),
          scannerId
        })
        if (result) onClose()
      }
      if (isFullBuy) {
        const { result } = await buyAllPackagesMutateAsync({
          scannerId
        })
        if (result) onClose()
      }
    } catch {
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
          <img src='/money.webp' alt='level3' />
        </div>
      </div>
      <p className={css.title}>{t(`modal.buy-warning.title`)}</p>
      {textMapped}
      <Button
        ref={buttonRef}
        variant='gradient'
        disabled={buyAllPackagesIsPending || buyPackageIsPending}
        className={css.button}
        onClick={handleBuy}
      >
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
