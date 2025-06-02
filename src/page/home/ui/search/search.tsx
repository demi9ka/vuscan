import { useState } from 'react'
import css from './search.module.css'
import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

type Props = {
  onChangeValue: (value: string) => void
}

export const Search = ({ onChangeValue }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')

  const handleScan = () => {
    onChangeValue(searchValue)
    navigate('/?modal=warning')
  }

  return (
    <div className={css.wrapper}>
      <input
        type='text'
        placeholder={t('home.search-placeholder')}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        className={css.searchInput}
      />
      <Button disabled={!searchValue.length} onClick={handleScan} className={css.button}>
        {t('home.scan-btn')}
      </Button>
    </div>
  )
}
