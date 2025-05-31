import { useState } from 'react'
import css from './search.module.css'
import { Button } from '@/shared/ui'

export const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleScan = () => {}

  return (
    <div className={css.wrapper}>
      <input
        type='text'
        placeholder='Введите URL сюда'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className={css.searchInput}
      />
      <Button
        onClick={handleScan}
        style={{
          fontFamily: 'var(--ff-Eesti)',
          fontSize: 20,
          fontWeight: 500,
          borderRadius: 12,
          padding: '11px 80px'
        }}
      >
        Сканировать
      </Button>
    </div>
  )
}
