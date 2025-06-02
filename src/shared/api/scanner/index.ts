import { ScannerParams, ScannerResponse } from './types'
import { api } from '..'
import { mockScanner1 } from './mock'

const PREFIX = '/scanner'

const scanner = async (data: ScannerParams) => {
  return mockScanner1
  return await api.post<ScannerResponse>(PREFIX + '/scanner', data)
}

export default {
  scanner
}
