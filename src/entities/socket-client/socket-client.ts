import { PackageType } from '@/store/scanner-store'
import { io, Socket } from 'socket.io-client'
import { toast } from '@/feature/toast'

type ServerEventsType = {
  updatePackages: (data: PackageType) => void
  finishScan: VoidFunction
}
type SocketClientConstructorType = {
  updatePackages: (data: PackageType) => void
  scannerId: string
}

export class SocketClient {
  readonly socket: Socket<ServerEventsType>

  constructor({ scannerId, updatePackages }: SocketClientConstructorType) {
    this.socket = io('http://localhost:3000', {
      auth: {
        scannerId
      },
      reconnectionAttempts: 5,
      reconnectionDelay: 1000
    })
    this.socket.on('connect_error', () => {
      toast('Не удалось подключиться к серверу', 'error')
    })
    this.socket.on('connect', () => {
      toast('Запущен процесс сканирования', 'success')
    })
    this.socket.on('disconnect', () => {})
    this.socket.on('updatePackages', updatePackages)
    this.socket.on('finishScan', () => {
      toast('Сканирование завершено', 'success')
      this.disconnect()
    })
  }

  disconnect() {
    this.socket.disconnect()
  }
}
