import { Button } from '@/shared/ui'
import css from './link-founded.module.css'
import { useTranslation } from 'react-i18next'

type Props = {
  linkFounded: number
}

export const LinkFounded = ({ linkFounded }: Props) => {
  const { t } = useTranslation()

  return (
    <Button className={css.button} variant='default'>
      {t('home.open-package-modal.link-founded', { count: linkFounded })}
    </Button>
  )
}
