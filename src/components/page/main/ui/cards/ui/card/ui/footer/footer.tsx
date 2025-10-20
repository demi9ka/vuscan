import { PackageType, scannerStore } from '@/store/scanner-store'
import css from './footer.module.css'
import { Button } from '@/shared/ui'
import { useNavigate } from '@/hooks'
import { useTranslation } from 'react-i18next'
import { combaneCSS } from '@/helpers'
import { observer } from 'mobx-react-lite'
import { toast } from '@/feature/toast'

type Props = {
  cardPackage: PackageType | null
  cardId: number
}

export const Footer = observer(({ cardPackage, cardId }: Props) => {
  const { scannerId, isFinished, packages } = scannerStore
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onOpenInfo = () => {
    navigate(`/?modal=card-info&id=${cardId}`, { replace: true })
  }

  const onClickNotFinished = () => {
    if (isFinished) return
    toast(t('toast.wait-scan-end'), 'error')
  }

  if (!scannerId) {
    return (
      <div className={css.buttonWrapper}>
        <Button className={css.button} onClick={onOpenInfo} variant="default">
          {t('global.more')}
        </Button>
      </div>
    )
  }

  if (!cardPackage)
    return (
      <div className={css.buttonWrapper}>
        <Button className={css.button} variant="default">
          Загрузка...
        </Button>
      </div>
    )
  const { id, findedLinks, progress } = cardPackage
  const onOpenPackage = () => {
    navigate(`/?modal=open-package&id=${id}`, { replace: true })
  }
  if (progress !== 100) {
    return (
      <div className={css.buttonWrapper}>
        <Button style={{ cursor: 'default' }} className={combaneCSS(css.button, css.progressBarButton)} variant="default">
          <p className={css.progressBarText}>{progress.toFixed(0)}%</p>
          <div className={css.progressBar} style={{ width: `${progress}%` }} />
        </Button>
      </div>
    )
  } else if (findedLinks > 0) {
    return (
      <div className={css.buttonWrapper} style={{ cursor: 'default' }}>
        <Button onClick={onClickNotFinished} className={css.button} variant="error">
          {t('home.link-btn', { count: findedLinks })}
        </Button>

        {isFinished && (
          <Button onClick={onOpenPackage} className={combaneCSS(css.button, css.openPackage)} variant="gradient">
            {t('home.open-package')}
          </Button>
        )}
      </div>
    )
  } else {
    return (
      <div className={css.buttonWrapper}>
        {isFinished && packages && packages.filter(el => el.findedLinks != 0).length != 0 && (
          <Button disabled className={combaneCSS(css.button, css.displayOff)}>
            0
          </Button>
        )}
        <Button style={{ cursor: 'default' }} className={css.button} variant="default">
          {t('home.no-thread')}
        </Button>
      </div>
    )
  }
})
