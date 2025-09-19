import css from './search.module.css'
import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'
import { scannerStore } from '@/store'
import { searchStore } from '@/store'
import { useScanner } from '@/entities'
import { observer } from 'mobx-react-lite'
import { FormEvent, useEffect, useState } from 'react'

export const Search = observer(() => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { scannerId, isFinished, newScan } = scannerStore
  const { setSearch, search, clearSearch } = searchStore
  const [isFormValid, setIsFormValid] = useState(false)
  const { isPending } = useScanner()

  const isInitialState = Boolean(!scannerId && !isFinished)
  const isScanning = Boolean(scannerId && !isFinished)

  useEffect(() => {
    try {
      const pattern =
        /^(https?:\/\/)?(www\.)?([a-zа-яё0-9-]+)(\.[a-zа-яё]{2,}){1,2}(:\d{1,5})?(\/[^\s?#]*)?(\?[^\s#]*)?(#[^\s]*)?$/iu
      setIsFormValid(pattern.test(search))
    } catch {
      setIsFormValid(false)
    }
  }, [search])
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (isScanning) return
    if (isInitialState) {
      if (!isFormValid) return
      navigate('/?modal=warning', { replace: true })
    }
    if (isFinished) {
      newScan()
      clearSearch()
    }
  }

  return (
    <form className={css.wrapper} onSubmit={onSubmit}>
      <input
        type='text'
        placeholder={t('home.search-placeholder')}
        disabled={!isInitialState}
        value={search}
        onChange={vl => isInitialState && setSearch(vl.target.value)}
        className={css.searchInput}
      />
      <Button
        type='submit'
        variant='gradient'
        disabled={!isFinished && ((isInitialState && !isFormValid) || isPending || isScanning)}
        className={css.button}
      >
        {isInitialState && t('home.scan-btn')}
        {isScanning && t('home.scan-btn-scanning')}
        {isFinished && t('home.scan-btn-finished')}
      </Button>
    </form>
  )
})
