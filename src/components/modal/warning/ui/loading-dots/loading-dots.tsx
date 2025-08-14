import { useEffect, useState } from 'react'

export const LoadingDots = () => {
  const [dots, setDots] = useState<string>('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots === '') return '.'
        if (prevDots === '.') return '..'
        if (prevDots === '..') return '...'
        return ''
      })
    }, 600)

    return () => clearInterval(interval)
  }, [])

  return dots
}
