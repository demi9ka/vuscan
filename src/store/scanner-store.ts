import { SocketClient } from '@/entities/socket-client'
import { toast } from '@/feature/toast'
import { makeAutoObservable } from 'mobx'

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
    // this.socket = new SocketClient({ scannerId })
    this.scannerId = scannerId

    setTimeout(() => {
      this.updatePackages([
        {
          id: 0,
          progress: 100,
          linkFounded: 44,
          status: 2
        },
        {
          id: 1,
          progress: 100,
          linkFounded: 0,
          status: 3
        },
        {
          id: 2,
          progress: 100,
          linkFounded: 2,
          status: 2
        },
        {
          id: 3,
          progress: 100,
          linkFounded: 0,
          status: 3
        }
      ])
    }, 1000)
    this.stop()
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
