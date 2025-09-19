import { useTranslation } from 'react-i18next'
import css from './buy-all.module.css'
import { useLocation } from 'react-router-dom'
import { Button, Modal } from '@/shared/ui'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { useNavigate } from '@/hooks'
import { useGetAllPackages } from '@/entities'
import { Footer } from './ui/footer'

export const BuyAll = observer(() => {
  const { packages, scannerId } = scannerStore
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { data: packagesData } = useGetAllPackages({ scannerId: scannerId || '' })

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const onOpenPackage = (id: number) => {
    navigate(`/?modal=open-package&id=${id}`, { replace: true })
  }

  if (!packages) return <></>
  const activePackages = packages.filter(el => el.findedLinks > 0)
  const opened = urlModal == 'buy-all'

  const contentMapped = activePackages.map(el => (
    <div key={el.id} className={css.packageInfo}>
      <p className={css.packageTitle}>{t(`home.levels.${el.id}.title`)}</p>
      <Button onClick={() => onOpenPackage(el.id)} className={css.packageButton} variant='error'>
        {t('home.link-btn', { count: el.findedLinks })}
      </Button>
    </div>
  ))

  return (
    <Modal title={t('modal.buy-all.title')} onClose={onClose} opened={opened}>
      <p className={css.description}>{t('modal.buy-all.description')}</p>
      <p className={css.title}>{t('modal.buy-all.content-title')}</p>
      <div className={css.content}>{contentMapped}</div>
      <Footer packagesData={packagesData} />
    </Modal>
  )
})
