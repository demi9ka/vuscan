import css from './button.module.css'

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={css.button}>
      {children}
    </button>
  )
}
