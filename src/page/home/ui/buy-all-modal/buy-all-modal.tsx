import { useTranslation } from 'react-i18next'
import css from './buy-all-modal.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Modal } from '@/shared/ui'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { LinkFounded } from './ui/link-founded'
import { useBuyAll } from '@/entities/scanner/use-buy-all'

export const BuyAllModal = observer(() => {
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
    console.log(paymentLink)
  }

  if (!packages) return <></>
  const activePackages = packages.filter(el => el.linkFounded > 0)
  const opened = urlModal == 'buy-all'
  const oldPrice = activePackages.length * 12

  const contentMapped = activePackages.map(el => (
    <div className={css.packageInfo}>
      <p className={css.packageTitle}>{t(`home.levels.${el.id}.title`)}</p>
      <LinkFounded linkFounded={el.linkFounded} />
    </div>
  ))

  return (
    <Modal className={css.modal} onClose={onClose} opened={opened}>
      <h1 className={css.title}>{t('home.buy-all-modal.title')}</h1>
      <p className={css.description}>{t('home.buy-all-modal.description')}</p>
      <h2 className={css.contentTitle}>{t('home.buy-all-modal.content-title')}</h2>
      <div className={css.content}>{contentMapped}</div>
      <div className={css.buttonWrapper}>
        <Button disabled={isPending || !scannerId} onClick={onBuyAll} className={css.button} variant='secondary'>
          <div className={css.discount}>-10%</div>
          <p className={css.buttonTitle}>{t('home.buy-all-btn')}</p>
          <div className={css.priceWrapper}>
            <div className={css.oldPrice}>{oldPrice}$</div>
            <div className={css.newPrice}>{(oldPrice * 0.9).toFixed(1)}$</div>
          </div>
        </Button>
      </div>
    </Modal>
  )
})
