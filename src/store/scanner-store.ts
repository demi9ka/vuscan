import { queryClient } from '@/app'
import { toast } from '@/feature/toast'
import api from '@/shared/api'
import { makeAutoObservable, runInAction } from 'mobx'
import { searchStore } from './search-store'
import { i18next } from '@/feature/locale'

export type PackageType = {
  id: number
  progress: number
  findedLinks: number
}

class ScannerStore {
  scannerId: string | null = null
  packages: PackageType[] | null = null
  isFinished: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  start = (scannerId: string) => {
    this.scannerId = scannerId
    this.initPackages()
    const f = async () => {
      try {
        if (!this.scannerId) clearInterval(interval)
        const {
          data: { data, isFinished },
          status
        } = await api.scanner.checkScannerState({ id: this.scannerId! })
        if (status !== 200) return

        this.setPackages(data as PackageType[])
        if (isFinished === true) {
          clearInterval(interval)

          toast(i18next.t('toast.scan-finish'), 'success')
          queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package'], exact: false })
          queryClient.invalidateQueries({ queryKey: ['scanner', 'get-all-packages'], exact: false })
          runInAction(() => {
            this.isFinished = true
          })
        }
      } catch {
        return 0
      }
    }
    const interval = setInterval(f, 5000)
    f()
  }

  setPackages = (packages: PackageType[] | null) => {
    this.packages = packages
  }
  newScan = () => {
    this.packages = null
    this.scannerId = null
    this.isFinished = false
    localStorage.removeItem('scannerId')
  }
  initPackages = () => {
    this.setPackages([
      {
        id: 0,
        findedLinks: 0,
        progress: 0
      },
      {
        id: 1,
        findedLinks: 0,
        progress: 0
      },
      {
        id: 2,
        findedLinks: 0,
        progress: 0
      },
      {
        id: 3,
        findedLinks: 0,
        progress: 0
      }
    ])
  }
  restoreScanner = async () => {
    const id = localStorage.getItem('scannerId')
    if (!id) return
    try {
      this.scannerId = id
      const {
        data: { data, isFinished, url }
      } = await api.scanner.checkScannerState({ id })
      searchStore.setSearch(url)
      this.setPackages(data as PackageType[])
      if (isFinished === true) {
        toast(i18next.t('toast.scan-finish'), 'success')
        runInAction(() => {
          this.isFinished = true
        })
      } else {
        this.start(id)
      }
    } catch {
      this.newScan()
    }
  }
}

export const scannerStore = new ScannerStore()
