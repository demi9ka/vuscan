import css from './trans.module.css'
import { Trans as TransComponent, TransProps } from 'react-i18next'

type Props = TransProps<string>

export const Trans = (props: Props) => {
  return (
    <div className={css.wrapper}>
      <TransComponent {...props} />
    </div>
  )
}
