import { SocketClient } from '@/entities/socket-client'
import { toast } from '@/feature/toast'
import { makeAutoObservable } from 'mobx'
import { searchStore } from './search-store'

export type PackageType = {
  id: number
  progress: number
  linkFounded: number
  status: number
}[]

class ScannerStore {
  scannerId: string | null = null
  isFinished: boolean = false
  packages: PackageType | null = null
  socket: SocketClient | null = null

  constructor() {
    makeAutoObservable(this)
  }

  start = (scannerId: string) => {
    if (!scannerId) return
    this.socket = new SocketClient({ scannerId })
    this.scannerId = scannerId
  }

  stop = () => {
    toast('Сканирование завершено', 'success')
    this.socket = null
    this.isFinished = true
  }
  updatePackages = (packages: PackageType | null) => {
    this.packages = packages
  }
  newScan = () => {
    this.isFinished = false
    this.packages = null
    this.scannerId = null
    this.socket = null
  }
}

export const scannerStore = new ScannerStore()
