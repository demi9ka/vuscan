import { NotFound, Main } from '@/components/page'
import { Routes, Route } from 'react-router-dom'

export const AppRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
