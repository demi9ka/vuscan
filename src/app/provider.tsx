import type { ReactNode } from 'react'
import { MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
      <MantineProvider defaultColorScheme='dark'>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </MantineProvider>
    </BrowserRouter>
  )
}
