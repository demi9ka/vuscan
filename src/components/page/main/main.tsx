import css from './main.module.css'
import { Cards } from './ui/cards'
import { Search } from './ui/search'
import { Title } from './ui/title'
import { BuyAll } from './ui/buy-all'
import { useMediaQuery } from '@/hooks'
import { ScanningCount } from '@/shared/ui/header/ui/scanning-count'
import { Helmet } from './helmet'

export const Main = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className={css.wrapper}>
      <Helmet />
      <div className={css.content}>
        {isMobile && <ScanningCount />}
        <Title />
        <Search />
        <Cards />
        <BuyAll />
      </div>
    </div>
  )
}
