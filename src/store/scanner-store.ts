import { SocketClient } from '@/entities/socket-client'
import { makeAutoObservable } from 'mobx'

export type PackageType = {
  id: number
  progress: number
  isStarted: boolean
  linkFounded?: number
}[]

class ScannerStore {
  scannerId: string | null = null
  packages: PackageType | null = null
  socket: SocketClient | null = null

  constructor() {
    makeAutoObservable(this)
  }

  start = (scannerId: string) => {
    this.socket = new SocketClient({ scannerId, updatePackages: this.updatePackages })
    this.scannerId = scannerId
  }
  updatePackages = (packages: PackageType | null) => {
    this.packages = packages
  }
}

export const scannerStore = new ScannerStore()
