import { BuyAllParams, BuyAllResponse, BuyPackageParams, BuyPackageResponse, checkScannerStateParams, checkScannerStateReponse, getPackageParams, getPackageResponse, ScannerParams, ScannerResponse } from './types'
import { api } from '..'

const PREFIX = '/scanner'

const scanner = async (data: ScannerParams) => {
  return await api.post<ScannerResponse>(PREFIX + '/', data)
}
const checkScannerState = async (data: checkScannerStateParams) => {
  return await api.post<checkScannerStateReponse>(PREFIX + '/check-scanner-state', data)
}
const getPackage = async (data: getPackageParams) => {
  return await api.post<getPackageResponse>(PREFIX + '/check-scanner-state', data)
}
const buyAll = async (data: BuyAllParams) => {
  return await api.post<BuyAllResponse>(PREFIX + '/buy-all', data)
}
const buyPackage = async (data: BuyPackageParams) => {
  return await api.post<BuyPackageResponse>(PREFIX + '/buy-package', data)
}

export default {
  scanner,
  getPackage,
  checkScannerState,
  buyAll,
  buyPackage,
}
