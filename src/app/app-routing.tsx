import { NotFound, Home } from '@/components/page'
import { Routes, Route } from 'react-router-dom'

export const AppRouting = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
