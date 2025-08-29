import { api } from '..'
import { CheckPaymentParams, CheckPaymentResponse } from './types'

const PREFIX = '/payment'

const checkPayment = async (params: CheckPaymentParams) => {
  return await api.get<CheckPaymentResponse>(PREFIX + '/check-payment', { params })
}

export default {
  checkPayment,
}
