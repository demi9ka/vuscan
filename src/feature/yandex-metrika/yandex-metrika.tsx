import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

declare global {
  interface Window {
    ym?: {
      (counterId: number, action: string, ...args: any[]): void
      a?: Array<any[]>
    }
  }
}

interface Props {
  counterId: number
}

export const YandexMetrika = ({ counterId }: Props) => {
  useEffect(() => {
    if (window.ym || import.meta.env.DEV) return
    window.ym =
      window.ym ||
      function (...args) {
        ;(window.ym!.a = window.ym!.a || []).push(args)
      }

    window.ym(counterId, 'init', {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
    })
  }, [counterId])

  return (
    <>
      <Helmet>
        <script async src='https://mc.yandex.ru/metrika/tag.js' />
      </Helmet>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=''
          />
        </div>
      </noscript>
    </>
  )
}
