import { PackageType } from '@/store/scanner-store'
import css from './footer.module.css'
import { Button } from '@/shared/ui'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { combaneCSS } from '@/helpers'

type Props = {
  cardPackage: PackageType[number] | null
  cardId: number
}

export const Footer = ({ cardPackage, cardId }: Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onOpenInfo = () => {
    navigate(`/?modal=card-info&id=${cardId}`)
  }
  if (!cardPackage) {
    return (
      <Button className={css.button} onClick={onOpenInfo} variant='default'>
        {t('global.more')}
      </Button>
    )
  }

  const { id, status, linkFounded, progress } = cardPackage

  const onOpenPackage = () => {
    navigate(`/?modal=open-package&id=${id}`)
  }

  if (status == 1) {
    return (
      <Button className={combaneCSS(css.button, css.progressBarButton)} variant='default'>
        <p className={css.progressBarText}>{progress}%</p>
        <div className={css.progressBar} style={{ width: `${progress}%` }} />
      </Button>
    )
  }
  if (status == 2) {
    return (
      <div className={css.buttonWrapper}>
        <Button className={css.button} variant='error'>
          {t('home.link-btn', { count: linkFounded })}
        </Button>
        <Button onClick={onOpenPackage} className={css.button} variant='default'>
          {t('home.open-package')}
        </Button>
      </div>
    )
  }
  if (status == 3) {
    return (
      <Button className={css.button} variant='default'>
        {t('home.no-thread')}
      </Button>
    )
  }
}
