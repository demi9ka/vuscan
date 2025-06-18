import { NotFound, Main } from '@/components/page'
import { languageStore } from '@/store'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

export const AppRouting = () => {
  const location = useLocation()

  // Проверяем, есть ли в URL язык
  const pathParts = location.pathname.split('/')
  const urlLang = pathParts[1]

  // Если язык в URL не совпадает с текущим в сторе - редиректим
  if (urlLang && urlLang !== languageStore.language) {
    const newPath = `/${languageStore.language}${location.pathname.slice(3)}`
    return <Navigate to={newPath} replace />
  }

  // Если языка в URL нет - добавляем
  if (!['ru', 'en'].includes(urlLang)) {
    const newPath = `/${languageStore.language}${location.pathname}`
    return <Navigate to={newPath} replace />
  }
  return (
    <Routes>
      <Route path='/:lang' element={<Main />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
