import { combaneCSS } from '@/helpers'
import css from './trans.module.css'
import { Trans as TransComponent, TransProps } from 'react-i18next'

type Props = TransProps<string> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Trans = ({ className, ...props }: Props) => {
  return (
    <div className={combaneCSS(css.wrapper, className ? className : '')}>
      <TransComponent {...props} />
    </div>
  )
}
