import css from './search.module.css'
import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { searchStore } from '@/store'
import { useScanner } from '@/entities/scanner'

export const Search = observer(() => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { scannerId, isFinished, newScan } = scannerStore
  const { search, setSearch, clearSearch } = searchStore
  const { isPending } = useScanner()

  const isInitialState = Boolean(!scannerId && !isFinished)
  const isScanning = Boolean(scannerId && !isFinished)

  const handleScan = () => {
    if (isScanning) return
    if (isInitialState) {
      navigate('/?modal=warning')
    }
    if (isFinished) {
      newScan()
      clearSearch()
    }
  }
  return (
    <div className={css.wrapper}>
      <input
        type='text'
        placeholder={t('home.search-placeholder')}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className={css.searchInput}
      />
      <Button
        variant='gradient'
        disabled={!search.length || isPending || isScanning}
        onClick={handleScan}
        className={css.button}
      >
        {isInitialState && t('home.scan-btn')}
        {isScanning && t('home.scan-btn-scanning')}
        {isFinished && t('home.scan-btn-finished')}
      </Button>
    </div>
  )
})
