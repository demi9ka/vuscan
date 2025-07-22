import { useTranslation } from 'react-i18next'
import css from './buy-all.module.css'
import { useLocation } from 'react-router-dom'
import { Button, Modal } from '@/shared/ui'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { useBuyAll } from '@/entities/scanner'
import { useNavigate } from '@/hooks'

export const BuyAll = observer(() => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isPending, mutateAsync } = useBuyAll()
  const location = useLocation()
  const { packages, scannerId } = scannerStore

  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/')
  }

  const onBuyAll = async () => {
    if (!scannerId) return
    const { paymentLink } = await mutateAsync({ scannerId })
    paymentLink
  }

  if (!packages) return <></>
  const activePackages = packages.filter(el => el.linkFounded > 0)
  const opened = urlModal == 'buy-all'
  const oldPrice = activePackages.length * 12

  const contentMapped = activePackages.map((el, i) => (
    <div key={i} className={css.packageInfo}>
      <p className={css.packageTitle}>{t(`home.levels.${el.id}.title`)}</p>
      <Button className={css.packageButton} variant="error">
        {t('home.link-btn', { count: el.linkFounded })}{' '}
      </Button>
    </div>
  ))

  return (
    <Modal title={t('modal.buy-all.title')} onClose={onClose} opened={opened}>
      <p className={css.description}>{t('modal.buy-all.description')}</p>
      <p className={css.title}>{t('modal.buy-all.content-title')}</p>
      <div className={css.content}>{contentMapped}</div>

      <Button disabled={isPending || !scannerId} onClick={onBuyAll} className={css.button} variant="gradient">
        <div className={css.discount}>-10%</div>
        <p className={css.buttonTitle}>{t('home.buy-all-btn')}</p>
        <div className={css.priceWrapper}>
          <div className={css.oldPrice}>{oldPrice}$</div>
          <div className={css.newPrice}>{(oldPrice * 0.9).toFixed(1)}$</div>
        </div>
      </Button>
    </Modal>
  )
})
