import { observer } from 'mobx-react-lite'
import css from './open-package.module.css'
import { scannerStore } from '@/store'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useGetPackage } from '@/entities/scanner'
import { Button, Modal, Level } from '@/shared/ui'
import { useMediaQuery, useNavigate } from '@/hooks'
import { Footer } from './ui/footer'
import { Links } from './ui/links'
import { combaneCSS } from '@/helpers'

type Props = {
  id: number
}

export const OpenPackage = observer(({ id }: Props) => {
  const { scannerId } = scannerStore
  const { data: packageData } = useGetPackage({ packageId: id, scannerId: scannerId || '' })
  const { t } = useTranslation()

  const navigate = useNavigate()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')
  const urlId = queryParams.get('id')

  const onClose = () => {
    navigate('/', { replace: true })
  }

  const isMobile = useMediaQuery('(max-width: 480px)')
  const opened = id == Number(urlId) && urlModal == 'open-package'

  return (
    <Modal onClose={onClose} title={isMobile ? t(`home.levels.${id}.title`) : ''} className={css.modal} opened={opened}>
      <div className={css.levelWrapper}>
        <Level text={t(`home.levels.${id}.level`)} color="var(--error)" />
      </div>
      <p className={css.title}>{t(`home.levels.${id}.title`)}</p>
      <div className={css.center}>
        <p className={css.description}>{t('modal.open-package.description')}</p>
      </div>
      {packageData ? (
        <>
          <div className={css.center}>
            <Button className={css.linkFoundedButton} variant="error">
              {t('modal.open-package.link-founded', {
                count: packageData.isBuy ? packageData.links.length : packageData.baseLinks?.length || 0,
              })}
            </Button>
          </div>
          <div className={css.center}>
            <p className={css.description}>{t('modal.open-package.content-description')}</p>
          </div>
          <div className={combaneCSS(css.scrollView)}>
            <Links packageData={packageData} />
          </div>
          <Footer packageData={packageData} packageId={id} />
        </>
      ) : (
        <></>
      )}
    </Modal>
  )
})
