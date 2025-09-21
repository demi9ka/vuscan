// lazy-toastify-css.jsx
import { useEffect } from 'react'

const ToastifyCSS = () => {
  useEffect(() => {
    import('react-toastify/dist/ReactToastify.css')
  }, [])

  return null
}

export default ToastifyCSS
