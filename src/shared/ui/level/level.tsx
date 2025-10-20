import { observer } from 'mobx-react-lite'
import css from './level.module.css'
import { languageStore } from '@/store'
import { combaneCSS } from '@/helpers'

type Props = {
  text: string
  color: string
}

export const Level = observer(({ color, text }: Props) => {
  const { language } = languageStore
  return (
    <div
      className={combaneCSS(css.level, language == 'he' ? css.bigFontSize : '')}
      style={
        {
          '--primary-color': color,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  )
})
