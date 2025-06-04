import css from './home.module.css'
import { Cards } from './ui/cards'
import { Search } from './ui/search'
import { Title } from './ui/title'
import { CardInfoModal } from './ui/card-info-modal'
import { WarningModal } from './ui/warning-modal'
import { useState } from 'react'
import { useScanner } from '@/entities/scanner/use-scanner'
import { useNavigate } from 'react-router-dom'
import { WrongUrlModal } from './ui/wrong-url-modal'
import { QueueModal } from './ui/queue-modal'
import { scannerStore } from '@/store'
import { BuyAllButton } from './ui/buy-all-button'
import { BuyAllModal } from './ui/buy-all-modal'
import { OpenPackageModal } from './ui/open-package-modal'

export const Home = () => {
  const { mutateAsync, isPending } = useScanner()
  const navigate = useNavigate()
  const [url, setUrl] = useState('')

  const onStartScan = async () => {
    const res = await mutateAsync({ url })
    if (res.status === 0) scannerStore.start(res.id)
    if (res.status === 1) navigate('/?modal=wrong-url')
    if (res.status === 2) navigate('/?modal=queue')
  }

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Title />
        <Search onChangeValue={setUrl} isPending={isPending} />
        <Cards />
        <BuyAllButton />
      </div>
      <CardInfoModal id={0} />
      <CardInfoModal id={1} />
      <CardInfoModal id={2} />
      <CardInfoModal id={3} />
      <WarningModal onStartScan={onStartScan} />
      <WrongUrlModal />
      <QueueModal />
      <BuyAllModal />
      <OpenPackageModal id={0} />
      <OpenPackageModal id={1} />
      <OpenPackageModal id={2} />
      <OpenPackageModal id={3} />
    </div>
  )
}
