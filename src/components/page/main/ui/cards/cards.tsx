import { cardsData } from '@/helpers'
import css from './cards.module.css'
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
