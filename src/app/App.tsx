import { Provider } from '.'
import { AppRouting } from './app-routing'
import { Header } from '@/shared/ui'
import { Modals } from '@/components/modal'
import css from './app.module.css'
import { lazy, Suspense } from 'react'
import '@/feature/locale'

const ToastifyCSS = lazy(() => import('@/helpers/lazy-toastify-css'))

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

      <Suspense fallback={null}>
        <ToastifyCSS />
      </Suspense>
    </Provider>
  )
}
