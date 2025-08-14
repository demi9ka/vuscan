import { useEffect, useState } from 'react'
import css from './timer.module.css'

type Props = {
  time: number
  onComplete?: () => void
}

export const Timer = ({ time, onComplete }: Props) => {
  const [millisecondsLeft, setMillisecondsLeft] = useState(time)
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    setMillisecondsLeft(time)
    setIsRunning(true)
  }, [time])

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setMillisecondsLeft(prev => {
        const newValue = prev - 1000
        if (newValue <= 0) {
          clearInterval(interval)
          setIsRunning(false)
          onComplete?.()
          return 0
        }
        return newValue
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [isRunning, onComplete])

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const parts = []

    if (hours > 0) {
      parts.push(hours.toString().padStart(2, '0'))
      parts.push(minutes.toString().padStart(2, '0'))
      parts.push(seconds.toString().padStart(2, '0'))
      return parts.join(':')
    }

    if (minutes > 0) {
      parts.push(minutes.toString().padStart(2, '0'))
      parts.push(seconds.toString().padStart(2, '0'))
      return parts.join(':')
    }

    return seconds.toString().padStart(2, '0')
  }

  return <p className={css.timer}>{formatTime(millisecondsLeft)}</p>
}
