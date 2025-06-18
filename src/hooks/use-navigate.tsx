import { useNavigate as useNavigateOriginal } from 'react-router-dom'
import { languageStore } from '@/store'
import { To, NavigateOptions } from 'react-router-dom'

// Расширяем тип To, чтобы включить number для навигации по истории
type ExtendedTo = To | number | string

export const useNavigate = () => {
  const originalNavigate = useNavigateOriginal()
  const { language } = languageStore

  const navigate = (to: ExtendedTo, options?: NavigateOptions) => {
    // Обработка числовых значений (-1, 1 и т.д.)
    if (typeof to === 'number') {
      originalNavigate(to)
      return
    }

    // Обработка объекта
    if (typeof to === 'object') {
      const pathname = to.pathname || '/'
      if (/^\/[a-z]{2}(\/|$)/.test(pathname)) {
        originalNavigate(to, options)
        return
      }
      originalNavigate(
        {
          ...to,
          pathname: `/${language}${pathname === '/' ? '' : pathname}`
        },
        options
      )
      return
    }

    // Обработка строки
    if (typeof to === 'string') {
      if (/^(https?:|\/\/)|^\/[a-z]{2}(\/|$)/.test(to)) {
        originalNavigate(to, options)
        return
      }

      const finalPath = `/${language}/${to.replace(/^\//, '')}`
      originalNavigate(finalPath, options)
      return
    }
  }

  return navigate
}
