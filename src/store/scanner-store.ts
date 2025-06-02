import { makeAutoObservable } from 'mobx'

class ScannerStore {
  scanner = null

  constructor() {
    makeAutoObservable(this)
  }
  connect = (id: string) => {}
}

export const scannerStore = new ScannerStore()
