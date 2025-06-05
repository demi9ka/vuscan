import css from './card.module.css'
import { useTranslation } from 'react-i18next'
import { scannerStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { Footer } from './ui/footer'

export type Props = {
  color: string
  logo: string
  id: number
}

export const Card = observer(({ logo, color, id }: Props) => {
  const { t } = useTranslation()
  const { packages } = scannerStore
  const cardPackage = packages ? packages.find(el => el.id == id)! : null
  const isRenderErrorBoxShadow = cardPackage && cardPackage.linkFounded > 0

  return (
    <div
      className={css.wrapper}
      style={{
        boxShadow: `0px 0px 22px ${isRenderErrorBoxShadow ? 'var(--error)' : color}`
      }}
    >
      <div
        className={css.level}
        style={{
          color: isRenderErrorBoxShadow ? 'var(--error)' : color,
          boxShadow: ` inset 0px 0px 12px ${isRenderErrorBoxShadow ? 'var(--error)' : color}`
        }}
      >
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
      <Footer cardPackage={cardPackage} cardId={id} />
    </div>
  )
})
