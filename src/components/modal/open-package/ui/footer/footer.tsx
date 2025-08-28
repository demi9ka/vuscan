import { getPackageResponse } from '@/shared/api/scanner/types'
import css from './footer.module.css'
import { Button, TimerIcon } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { useApplyPromocode, useSendReportToEmail } from '@/entities/scanner'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { combaneCSS } from '@/helpers'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './schema'
import { Timer } from '@/shared/ui'
import { useNavigate } from '@/hooks'
import { useState } from 'react'

type Props = {
  packageData: getPackageResponse
  packageId: number
}

type FormDataType = {
  email: string
}

export const Footer = observer(({ packageData, packageId }: Props) => {
  const { t } = useTranslation()
  const { scannerId } = scannerStore
  const { mutateAsync: sendReportToEmailmutateAsync, isPending: sendReportToEmailIsPending } = useSendReportToEmail()
  const { mutateAsync: applyPromocodemutateAsync, isPending: applyPromocodePending } = useApplyPromocode()

  const navigate = useNavigate()

  const [promocode, setPromocode] = useState('')

  const onBuyPackage = () => {
    navigate(`/?modal=buy-warning&packageId=${packageId}`)
  }

  const onGoToAllPackages = () => {
    navigate('?modal=buy-all', { replace: true })
  }

  const onApplyPromocode = async () => {
    if (!promocode.length || !scannerId) return
    setPromocode('')
    await applyPromocodemutateAsync({ packageId, scannerId, promocode })
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormDataType>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  const onSubmit = async (formData: FormDataType) => {
    const { email } = formData
    await sendReportToEmailmutateAsync({
      email,
      packageId,
      scannerId: scannerId || '',
    })
    reset()
  }

  if (!packageData) {
    return <></>
  }

  if (packageData.isBuy && packageData.isFullBuy) {
    return (
      <Button onClick={onGoToAllPackages} className={css.button} variant="gradient">
        {t('modal.open-package.go-to-all-packages')}
      </Button>
    )
  }

  if (packageData.isBuy) {
    return (
      <>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder={t('modal.open-package.enter-email')} className={css.input} {...register('email')} />
          <Button disabled={!isValid || sendReportToEmailIsPending} type="submit" className={combaneCSS(css.button, css.sendToEmail)} variant="gradient">
            <p className={css.buttonText}>{t('modal.open-package.send-to-email')}</p>
          </Button>
        </form>
        {packageData.time !== undefined ? (
          <div className={css.warningWrapper}>
            <TimerIcon className={css.timerIcon} />
            <Timer time={packageData.time} />
            <div className={css.divider} />
            <p className={css.warning}>{t('modal.open-package.warning')}</p>
          </div>
        ) : (
          <></>
        )}
      </>
    )
  }

  return (
    <div className={css.wrapper}>
      <Button onClick={onBuyPackage} className={css.button} variant="gradient">
        <p className={css.buttonText}>{t('home.open-package')}</p>
        <p className={css.price}>{packageData?.price || 0}$</p>
      </Button>
      <p>{t('global.or')}</p>
      <input type="text" placeholder={t('modal.open-package.enter-promocode')} className={css.input} style={{ marginBottom: 0 }} value={promocode} onChange={v => setPromocode(v.target.value)} />
      <Button disabled={!promocode.length || applyPromocodePending} onClick={onApplyPromocode} className={css.button} variant="default">
        {t('modal.open-package.apply-promocode')}
      </Button>
    </div>
  )
})
