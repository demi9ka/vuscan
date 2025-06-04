import { BuyAllParams, BuyAllResponse, QueueParams, QueueResponse, ScannerParams, ScannerResponse } from './types'
import { api } from '..'
import { mockQueue, mockScanner0, mockScanner2, mockScanner1, mockBuyAll } from './mock'

const PREFIX = '/scanner'

const scanner = async (data: ScannerParams) => {
  return mockScanner0
  return await api.post<ScannerResponse>(PREFIX + '/scanner', data)
}
const queue = async (data: QueueParams) => {
  return mockQueue
  return await api.post<QueueResponse>(PREFIX + '/queue', data)
}
const buyAll = async (data: BuyAllParams) => {
  return mockBuyAll
  return await api.post<BuyAllResponse>(PREFIX + '/buy-all', data)
}

export default {
  scanner,
  queue,
  buyAll
}
