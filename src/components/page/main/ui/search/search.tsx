import css from './search.module.css'
import { Button } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@/hooks'
import { scannerStore } from '@/store'
import { searchStore } from '@/store'
import { useScanner } from '@/entities/scanner'
import { useForm } from 'react-hook-form'

type FormDataType = {
  url: string
}

export const Search = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { scannerId, isFinished, newScan } = scannerStore
  const { setSearch, clearSearch } = searchStore
  const { isPending } = useScanner()

  const isInitialState = Boolean(!scannerId && !isFinished)
  const isScanning = Boolean(scannerId && !isFinished)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isDirty }
  } = useForm<FormDataType>()

  const onSubmit = (formData: FormDataType) => {
    if (isScanning) return
    if (isInitialState) {
      setSearch(formData.url)
      navigate('/?modal=warning')
    }
    if (isFinished) {
      newScan()
      clearSearch()
      reset()
    }
  }

  return (
    <form className={css.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder={t('home.search-placeholder')}
        className={css.searchInput}
        {...register('url', {
          validate: value => {
            if (isFinished) return true
            if (!value) return 'URL обязателен'
            return true
          }
        })}
      />
      <Button
        type='submit'
        variant='gradient'
        disabled={!isValid || !isDirty || isPending || isScanning}
        className={css.button}
      >
        {isInitialState && t('home.scan-btn')}
        {isScanning && t('home.scan-btn-scanning')}
        {isFinished && t('home.scan-btn-finished')}
      </Button>
    </form>
  )
}
