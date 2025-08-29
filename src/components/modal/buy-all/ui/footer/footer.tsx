import { useApplyPromocode, useSendAllReportsToEmail } from '@/entities/scanner'
import { getAllPackagesResponse } from '@/shared/api/scanner/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { schema } from './schema'
import { scannerStore } from '@/store'
import css from './footer.module.css'
import { Button, Timer, TimerIcon } from '@/shared/ui'
import { combaneCSS } from '@/helpers'
import { useNavigate } from '@/hooks'
import { useState } from 'react'

type Props = {
  packagesData?: getAllPackagesResponse
}

type FormDataType = {
  email: string
}

export const Footer = ({ packagesData }: Props) => {
  const { t } = useTranslation()
  const { mutateAsync: sendAllReportsToEmailMutateAsync, isPending: sendAllReportsToEmailIsPending } = useSendAllReportsToEmail()
  const { mutateAsync: applyPromocodemutateAsync, isPending: applyPromocodePending } = useApplyPromocode()
  const { scannerId } = scannerStore
  const navigate = useNavigate()

  const [promocode, setPromocode] = useState('')

  const onBuyAllPackages = () => {
    navigate('/?modal=buy-warning')
  }

  const onApplyPromocode = async () => {
    if (!promocode.length || !scannerId) return
    setPromocode('')
    await applyPromocodemutateAsync({ scannerId, promocode, isFullScan: true })
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
    await sendAllReportsToEmailMutateAsync({
      email,
      scannerId: scannerId || '',
    })
    reset()
  }

  if (!packagesData) {
    return <></>
  }

  if (packagesData.isBuy) {
    return (
      <>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder={t('modal.open-package.enter-email')} className={css.input} {...register('email')} />
          <Button disabled={!isValid || sendAllReportsToEmailIsPending} type="submit" className={combaneCSS(css.button, css.sendToEmailButton)} variant="gradient">
            {t('modal.open-package.send-to-email')}
          </Button>
        </form>

        <div className={css.warningWrapper}>
          <TimerIcon className={css.timerIcon} />
          <Timer time={packagesData.time} />
          <div className={css.divider} />
          <p className={css.warning}>{t('modal.open-package.warning')}</p>
        </div>
      </>
    )
  }

  if (!packagesData.isBuy) {
    return (
      <div className={css.wrapper}>
        <Button disabled={!scannerId} onClick={onBuyAllPackages} className={css.button} variant="gradient">
          <div className={css.discount}>-10%</div>
          <p className={css.buttonTitle}>{t('home.buy-all-btn')}</p>

          <div className={css.priceWrapper}>
            <div className={css.oldPrice}>{packagesData.oldPrice}$</div>
            <div className={css.newPrice}>{packagesData.price}$</div>
          </div>
        </Button>
        <p>{t('global.or')}</p>
        <input type="text" placeholder={t('modal.open-package.enter-promocode')} className={css.input} style={{ marginBottom: 0 }} value={promocode} onChange={v => setPromocode(v.target.value)} />
        <Button disabled={!promocode.length || applyPromocodePending} onClick={onApplyPromocode} className={css.button} style={{ justifyContent: 'center' }} variant="default">
          {t('modal.open-package.apply-promocode')}
        </Button>
      </div>
    )
  }
}
