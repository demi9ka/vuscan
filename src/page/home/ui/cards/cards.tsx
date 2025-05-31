import css from './cards.module.css'
import { cardsData } from './constants'
import { Card } from './ui/card'

export const Cards = () => {
  return (
    <div className={css.wrapper}>
      {cardsData.map(el => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  )
}
