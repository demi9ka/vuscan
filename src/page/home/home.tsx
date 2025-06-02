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

export const Home = () => {
  const { mutateAsync, isPending } = useScanner()
  const navigate = useNavigate()
  const [url, setUrl] = useState('')

  const onStartScan = async () => {
    const res = await mutateAsync({ url })
    if (res.status === 1) navigate('/?modal=wrong-url')
  }

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Title />
        <Search onChangeValue={setUrl} />
        <Cards />
      </div>
      <CardInfoModal id={0} />
      <CardInfoModal id={1} />
      <CardInfoModal id={2} />
      <CardInfoModal id={3} />
      <WarningModal onStartScan={onStartScan} />
      <WrongUrlModal />
    </div>
  )
}
