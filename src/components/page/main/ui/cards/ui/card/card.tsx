import css from './card.module.css'
import { scannerStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { Footer } from './ui/footer'
import { Content } from './ui/content'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Level } from '@/shared/ui/level'

export type Props = {
  color: string
  logo: string
  id: number
}

export const Card = observer(({ logo, color, id }: Props) => {
  const { t } = useTranslation()
  const { packages } = scannerStore

  const cardPackage = packages ? packages.find(el => el.id == id)! : null
  const isRenderErrorBoxShadow = Boolean(cardPackage && cardPackage.linkFounded > 0)

  const primaryColor = isRenderErrorBoxShadow ? 'var(--error)' : color

  return (
    <div
      className={css.wrapper}
      style={
        {
          '--primary-color': primaryColor
        } as React.CSSProperties
      }
    >
      <div className={css.levelWrapper}>
        <Level color={primaryColor} text={t(`home.levels.${id}.level`)} />
      </div>
      <Content id={id} logo={logo} isRenderErrorBoxShadow={isRenderErrorBoxShadow} />
      <Footer cardPackage={cardPackage} cardId={id} />
    </div>
  )
})
