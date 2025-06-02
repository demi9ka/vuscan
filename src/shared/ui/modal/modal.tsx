import { useEffect } from 'react'
import css from './modal.module.css'
import { combaneCSS } from '@/helpers'
import { CrossIcon } from '../svg'

type Props = {
  opened: boolean
  onClose: VoidFunction
  title?: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Modal = ({ onClose, opened, children, title, className, ...props }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className={combaneCSS(css.wrapper, opened ? css.opened : '')}>
      <div {...props} className={combaneCSS(css.modal, className || '')}>
        <div className={css.header}>
          <h1 className={css.title}>{title}</h1>
          <CrossIcon className={css.close} onClick={onClose} />
        </div>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  )
}
