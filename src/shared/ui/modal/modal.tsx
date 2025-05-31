import { useEffect } from 'react'
import css from './modal.module.css'
import { combaneCSS } from '@/helpers'
import { CrossIcon } from '../svg'

type Props = {
  opened: boolean
  onClose: VoidFunction
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Modal = ({ onClose, opened, children, ...props }: Props) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className={combaneCSS(css.wrapper, opened ? css.opened : '')}>
      <div {...props} className={css.modal}>
        <div className={css.header}>
          <CrossIcon style={{ width: 20, cursor: 'pointer' }} onClick={onClose} />
        </div>
        <div className={css.content}>{children}</div>
      </div>
    </div>
  )
}
