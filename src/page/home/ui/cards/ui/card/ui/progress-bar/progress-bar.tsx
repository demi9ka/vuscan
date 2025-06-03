import { Button } from '@/shared/ui'
import css from './progress-bar.module.css'

type Props = {
  progress: number
}

export const ProgressBar = ({ progress }: Props) => {
  return (
    <Button className={css.button} variant='secondary'>
      <div className={css.progressBar} style={{ width: `${progress}%` }} />
      <p className={css.text}>{progress}%</p>
    </Button>
  )
}
