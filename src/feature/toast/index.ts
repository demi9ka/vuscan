import { toast as showToast, ToastContainerProps } from 'react-toastify'
import css from './toast.module.css'

export const toast = (content: string, variant?: 'success' | 'error') => {
  showToast[variant || 'error'](content)
}

export const toastContainerProps: ToastContainerProps = {
  theme: 'dark',
  position: 'bottom-right',
  hideProgressBar: true,
  toastClassName: css.toast
}
