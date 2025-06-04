import { observer } from 'mobx-react-lite'
import css from './buy-all-button.module.css'
import { scannerStore } from '@/store'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui'

export const BuyAllButton = observer(() => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { isFinished, packages } = scannerStore
  const isRender = isFinished && packages!.filter(el => el.linkFounded > 0).length > 1

  if (!isRender) {
    return <></>
  }

  const goToAllBuy = () => {
    navigate('/?modal=buy-all')
  }

  return (
    <div className={css.wrapper}>
      <Button onClick={goToAllBuy} variant='secondary' className={css.button}>
        <div className={css.discount}>-10%</div>
        {t('home.buy-all-btn')}
      </Button>
    </div>
  )
})
