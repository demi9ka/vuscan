import { observer } from 'mobx-react-lite'
import css from './open-package.module.css'
import { scannerStore } from '@/store'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBuyPackage } from '@/entities/scanner'
import { Button, LockIcon, Modal } from '@/shared/ui'
import { combaneCSS, generateRandomLinks } from '@/helpers'
import { useMemo } from 'react'

type Props = {
  id: number
}

export const OpenPackage = observer(({ id }: Props) => {
  const { scannerId, packages } = scannerStore
  const { mutateAsync } = useBuyPackage()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const urlModal = queryParams.get('modal')
  const urlId = queryParams.get('id')

  const onClose = () => {
    navigate('/')
  }

  const activePackage = (packages || []).find(el => el.id == id)
  const fakeLinkList = useMemo(
    () => generateRandomLinks(activePackage ? activePackage.linkFounded : 0),
    [activePackage]
  )

  const onBuyPackage = async () => {
    if (!scannerId) return
    const { paymentLink } = await mutateAsync({ id, scannerId })
    paymentLink
  }

  const isWasPaid = false
  const opened = id == Number(urlId) && urlModal == 'open-package'

  if (!activePackage || activePackage.linkFounded == 0) {
    return <></>
  }

  const fakeLinks = fakeLinkList.map((link, i) => (
    <div key={i} className={css.linkWrapper}>
      <p className={combaneCSS(css.link, !isWasPaid ? css.blur : '')}>{link}</p>
      <Button variant='default' className={css.linkButton}>
        <LockIcon className={css.iconWrapper} />
      </Button>
    </div>
  ))

  return (
    <Modal onClose={onClose} className={css.modal} opened={opened}>
      <div className={css.center}>
        <div className={css.level}>{t(`home.levels.${id}.level`)}</div>
      </div>
      <h1 className={css.title}>{t(`home.levels.${id}.title`)}</h1>
      <p className={css.description}>{t('home.open-package-modal.description')}</p>
      <div className={css.center}>
        <Button className={css.linkFoundedButton} variant='error'>
          {t('home.open-package-modal.link-founded', { count: activePackage.linkFounded })}
        </Button>
      </div>
      <p className={css.description}>{t('home.open-package-modal.content-description')}</p>
      <div className={css.scrollView}>{isWasPaid ? <></> : fakeLinks}</div>
      <div className={css.center}>
        <Button onClick={onBuyPackage} className={css.button} variant='gradient'>
          <p className={css.buttonText}>{t('home.open-package')}</p>
          <p className={css.price}>12$</p>
        </Button>
      </div>
    </Modal>
  )
})
