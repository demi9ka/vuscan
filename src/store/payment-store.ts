import { queryClient } from '@/app'
import { toast } from '@/feature/toast'
import api from '@/shared/api'
import { makeAutoObservable } from 'mobx'
import { scannerStore } from './scanner-store'
import { i18next } from '@/feature/locale'

export type PaymentStorageType = {
  orderId: string
  packageId?: number
}

class PaymentStore {
  constructor() {
    makeAutoObservable(this)
  }
  restoreCheckPayments = () => {
    const paymentsId = JSON.parse(localStorage.getItem('paymentsId') || '[]') as PaymentStorageType[]
    paymentsId.map(({ orderId, packageId }) => this.checkPayment(orderId, packageId))
  }

  checkPayment = (orderId: string, packageId?: number) => {
    const f = async () => {
      const { status } = (await api.payment.checkPayment({ orderId })).data
      if (status !== 0) {
        if (status == 1) {
          toast(i18next.t('toast.payment-success'), 'success')
          const { scannerId } = scannerStore
          if (packageId) queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package', { packageId, scannerId }] })
          else {
            queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package'], exact: false })
            queryClient.invalidateQueries({ queryKey: ['scanner', 'get-all-packages', { scannerId }] })
          }
        }
        clearInterval(interval)
        const payments = JSON.parse(localStorage.getItem('paymentsId') || '[]') as PaymentStorageType[]
        localStorage.setItem('paymentsId', JSON.stringify(payments.filter(el => el.orderId !== orderId)))
      }
    }
    const interval = setInterval(f, 10000)
    f()
  }
}

export const paymentStore = new PaymentStore()
