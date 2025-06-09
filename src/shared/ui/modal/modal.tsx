import { useEffect } from 'react'
import css from './modal.module.css'
import { combaneCSS } from '@/helpers'
import { BackIcon, CrossIcon } from '../svg'
import { useMediaQuery } from '@/hooks'

type Props = {
  opened: boolean
  onClose: VoidFunction
  title?: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Modal = ({ onClose, opened, children, title, className, ...props }: Props) => {
  const isMobile = useMediaQuery('(max-width: 390px)')
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className={combaneCSS(css.wrapper, opened ? css.opened : '')}>
      <div {...props} className={combaneCSS(css.modal, isMobile ? '' : className || '')}>
        <div className={css.header}>
          {isMobile ? (
            <>
              <div className={css.closeWrapper} onClick={onClose}>
                <BackIcon className={css.close} onClick={onClose} />
              </div>
              <h3 className={css.title}>{title}</h3>
            </>
          ) : (
            <>
              <h1 className={css.title}>{title}</h1>

              <CrossIcon className={css.close} />
            </>
          )}
        </div>
        <div className={combaneCSS(css.content, isMobile ? className || '' : '')}>{children}</div>
      </div>
    </div>
  )
}
