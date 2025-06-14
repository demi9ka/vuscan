import css from './search.module.css'
import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { scannerStore } from '@/store'
import { searchStore } from '@/store'
import { useScanner } from '@/entities/scanner'
import { useEffect, useRef } from 'react'

export const Search = observer(() => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { scannerId, isFinished, newScan } = scannerStore
  const { search, setSearch, clearSearch } = searchStore
  const { isPending } = useScanner()

  const buttonRef = useRef<HTMLButtonElement>(null)

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        if (buttonRef.current) {
          buttonRef.current.click()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
        ref={buttonRef}
        disabled={!search.length || isPending || isScanning}
        onClick={handleScan}
        onKeyDown={e => e.key === 'Enter' && buttonRef.current?.click()}
        className={css.button}
      >
        {isInitialState && t('home.scan-btn')}
        {isScanning && t('home.scan-btn-scanning')}
        {isFinished && t('home.scan-btn-finished')}
      </Button>
    </div>
  )
})
