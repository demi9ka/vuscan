import { combaneCSS } from '@/helpers'
import css from './button.module.css'

type Props = { variant?: 'primary' | 'secondary' } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button className={combaneCSS(css[variant || 'primary'], className || '', css.button)} {...props}>
      {children}
    </button>
  )
}
