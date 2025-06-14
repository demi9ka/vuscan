import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { toastContainerProps } from '@/feature/toast'
import { YandexMetrika } from '@/feature/yandex-metrika'

type Props = {
  children: ReactNode
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      staleTime: 1000 * 60 * 5
    }
  }
})

export const Provider = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <YandexMetrika counterId={102612557} />
        <ToastContainer {...toastContainerProps} />
        {children}
      </QueryClientProvider>
    </BrowserRouter>
  )
}
