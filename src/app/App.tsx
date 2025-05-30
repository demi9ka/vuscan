import { Provider } from '.'
import { AppRouting } from './app-routing'
import { Header } from '@/shared/ui'
import css from './app.module.css'

export const App = () => {
  return (
    <Provider>
      <div className={css.wrapper}>
        <Header />
        <div className={css.content}>
          <AppRouting />
        </div>
      </div>
    </Provider>
  )
}
