import css from './main.module.css'
import { Cards } from './ui/cards'
import { Search } from './ui/search'
import { Title } from './ui/title'
import { BuyAll } from './ui/buy-all'

export const Main = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Title />
        <Search />
        <Cards />
        <BuyAll />
      </div>
    </div>
  )
}
