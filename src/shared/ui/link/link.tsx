import { Link as OriginalLink } from 'react-router-dom'
import { languageStore } from '@/store'
import { observer } from 'mobx-react-lite'
import { To, LinkProps } from 'react-router-dom'
import { ReactNode } from 'react'

type ExtendedLinkProps = Omit<LinkProps, 'to'> & {
  to: To | string
  children: ReactNode
}

export const Link = observer(({ to, ...props }: ExtendedLinkProps) => {
  const { language } = languageStore

  const normalizeTo = (): To => {
    // Обработка объекта
    if (typeof to === 'object') {
      const pathname = to.pathname || '/'
      if (/^\/[a-z]{2}(\/|$)/.test(pathname)) {
        return to
      }
      return {
        ...to,
        pathname: `/${language}${pathname === '/' ? '' : pathname}`
      }
    }

    // Обработка строки
    if (typeof to === 'string') {
      if (/^(https?:|\/\/)|^\/[a-z]{2}(\/|$)/.test(to)) {
        return to
      }
      return `/${language}/${to.replace(/^\//, '')}`
    }

    return to
  }

  return <OriginalLink to={normalizeTo()} {...props} />
})
