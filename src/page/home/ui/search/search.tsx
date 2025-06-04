import { useState } from 'react'
import css from './search.module.css'
import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'

type Props = {
  onChangeValue: (value: string) => void
  isPending: boolean
}

export const Search = observer(({ onChangeValue, isPending }: Props) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchValue, setSearchValue] = useState('')
  const { scannerId, isFinished, newScan } = scannerStore

  const isInitialState = Boolean(!scannerId && !isFinished)
  const isScanning = Boolean(scannerId && !isFinished)
  const isFinishScanning = Boolean(scannerId && isFinished)
  const handleScan = () => {
    if (isScanning) return
    if (isInitialState) {
      onChangeValue(searchValue)
      navigate('/?modal=warning')
    }
    if (isFinished) {
      setSearchValue('')
      newScan()
    }
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
      <Button disabled={!searchValue.length || isPending || isScanning} onClick={handleScan} className={css.button}>
        {isInitialState && t('home.scan-btn')}
        {isScanning && t('home.scan-btn-scanning')}
        {isFinishScanning && t('home.scan-btn-finished')}
      </Button>
    </div>
  )
})
