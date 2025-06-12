import { Provider } from '.'
import { AppRouting } from './app-routing'
import { Header } from '@/shared/ui'
import { Modals } from '@/components/modal'
import css from './app.module.css'
import '@/feature/locale'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <Provider>
      <div className={css.wrapper}>
        <Header />
        <main className={css.content}>
          <AppRouting />
        </main>
      </div>
      <Modals />
    </Provider>
  )
}
