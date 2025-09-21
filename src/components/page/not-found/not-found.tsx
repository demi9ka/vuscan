import { Helmet } from './helmet'
import css from './not-found.module.css'

export const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <Helmet />
      <h1 className={css.title}>404</h1>
      <p className={css.text}>Страница не найдена</p>
    </div>
  )
}
