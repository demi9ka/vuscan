import css from './home.module.css'
import { Cards } from './ui/cards'
import { Search } from './ui/search'
import { Title } from './ui/title'
import { CardInfoModal } from './ui/card-info-modal'
import { WarningModal } from './ui/warning-modal'

export const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Title />
        <Search />
        <Cards />
      </div>
      <CardInfoModal id={0} />
      <CardInfoModal id={1} />
      <CardInfoModal id={2} />
      <CardInfoModal id={3} />
      <WarningModal />
    </div>
  )
}
