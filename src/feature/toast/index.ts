import { toast as showToast, ToastContainerProps } from 'react-toastify'

export const toast = (content: string, variant?: 'success' | 'error') => {
  showToast[variant || 'error'](content)
}

export const toastContainerProps: ToastContainerProps = {
  theme: 'dark',
  position: 'bottom-right',
  hideProgressBar: true,
  toastStyle: {
    fontSize: 18,
    fontFamily: ' var(--ff-Manrope)',
    backgroundColor: 'var(--dark)',
    border: '2px solid var(--border)'
  }
}
