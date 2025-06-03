import { QueueParams, QueueResponse, ScannerParams, ScannerResponse } from './types'
import { api } from '..'
import { mockQueue, mockScanner0, mockScanner2, mockScanner1 } from './mock'

const PREFIX = '/scanner'

const scanner = async (data: ScannerParams) => {
  return mockScanner0
  return await api.post<ScannerResponse>(PREFIX + '/scanner', data)
}
const queue = async (data: QueueParams) => {
  return mockQueue
  return await api.post<QueueResponse>(PREFIX + '/queue', data)
}

export default {
  scanner,
  queue
}
