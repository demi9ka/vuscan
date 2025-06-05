import { combaneCSS } from '@/helpers'
import css from './button.module.css'

type Props = {
  variant?: 'gradient' | 'default' | 'error'
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({ children, variant, className, ...props }: Props) => {
  return (
    <button className={combaneCSS(css[variant || 'default'], css.button, className || '')} {...props}>
      {children}
    </button>
  )
}
