import css from './level.module.css'

type Props = {
  text: string
  color: string
}

export const Level = ({ color, text }: Props) => {
  return (
    <div
      className={css.level}
      style={
        {
          '--primary-color': color
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  )
}
