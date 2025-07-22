import { observer } from 'mobx-react-lite'
import css from './open-package.module.css'
import { scannerStore } from '@/store'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { useBuyPackage } from '@/entities/scanner'
import { Button, LockIcon, Modal, Level } from '@/shared/ui'
import { combaneCSS, generateRandomLinks } from '@/helpers'
import { useMemo } from 'react'
import { useMediaQuery, useNavigate } from '@/hooks'

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
  const isMobile = useMediaQuery('(max-width: 480px)')

  const activePackage = (packages || []).find(el => el.id == id)
  const fakeLinkList = useMemo(() => generateRandomLinks(activePackage ? activePackage.linkFounded : 0), [activePackage])

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
      <Button variant="default" className={css.linkButton}>
        <LockIcon className={css.iconWrapper} />
      </Button>
    </div>
  ))

  return (
    <Modal onClose={onClose} title={isMobile ? t(`home.levels.${id}.title`) : ''} className={css.modal} opened={opened}>
      <div className={css.levelWrapper}>
        <Level text={t(`home.levels.${id}.level`)} color="var(--error)" />
      </div>
      <p className={css.title}>{t(`home.levels.${id}.title`)}</p>
      <p className={css.description}>{t('modal.open-package.description')}</p>
      <div className={css.center}>
        <Button className={css.linkFoundedButton} variant="error">
          {t('modal.open-package.link-founded', { count: activePackage.linkFounded })}
        </Button>
      </div>
      <p className={css.description}>{t('modal.open-package.content-description')}</p>
      <div className={css.scrollView}>{isWasPaid ? <></> : fakeLinks}</div>
      <div className={css.center}>
        <Button onClick={onBuyPackage} className={css.button} variant="gradient">
          <p className={css.buttonText}>{t('home.open-package')}</p>
          <p className={css.price}>12$</p>
        </Button>
      </div>
    </Modal>
  )
})
