import css from './card.module.css'
import { useTranslation } from 'react-i18next'
import { scannerStore } from '@/store'
import { ProgressBar } from './ui/progress-bar'
import { LinkFounded } from './ui/link-founded'
import { InfoButton } from './ui/info-button'
import { OpenPackage } from './ui/open-result'
import { NoThread } from './ui/no-thread'
import { observer } from 'mobx-react-lite'

export type Props = {
  color: string
  logo: string
  id: number
}

export const Card = observer(({ logo, color, id }: Props) => {
  const { t } = useTranslation()
  const { packages } = scannerStore

  const cardPackage = packages ? packages.find(el => el.id == id)! : null

  const isRenderProgressBar = cardPackage && cardPackage.progress !== 100
  const isRenderScanningResult = cardPackage && cardPackage.progress == 100 && cardPackage.linkFounded! > 0
  const isRenderInfoButton = !Boolean(cardPackage)
  const isRenderNoThreats = cardPackage && cardPackage.linkFounded == 0
  const isRenderErrorBoxShadow = cardPackage && cardPackage.linkFounded && cardPackage.linkFounded > 0

  return (
    <div
      className={css.wrapper}
      style={{
        boxShadow: `0px 0px 22px ${color}`
      }}
    >
      <div className={css.level} style={{ color, boxShadow: ` inset 0px 0px 12px ${color}` }}>
        {t(`home.levels.${id}.level`)}
      </div>
      <div className={css.avatarWrapper}>
        <div className={css.logoWrapper}>
          <img src={logo} />
        </div>
        {isRenderErrorBoxShadow ? <div className={css.errorBoxShadow} /> : <></>}
      </div>
      <h3 className={css.title}>{t(`home.levels.${id}.title`)}</h3>
      <p className={css.description}>{t(`home.levels.${id}.description`)}</p>
      <div className={css.buttonWrapper}>
        {isRenderProgressBar && <ProgressBar progress={cardPackage.progress} />}
        {isRenderScanningResult && (
          <>
            <LinkFounded linkFounded={cardPackage.linkFounded!} />
            <OpenPackage id={id} />
          </>
        )}
      </div>
      {isRenderInfoButton && <InfoButton id={id} />}
      {isRenderNoThreats && <NoThread />}
    </div>
  )
})
