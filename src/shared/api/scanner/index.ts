import {
  BuyPackageParams,
  BuyPackageResponse,
  checkScannerStateParams,
  checkScannerStateReponse,
  getAllPackagesParams,
  getAllPackagesResponse,
  getPackageParams,
  getPackageResponse,
  scannerParams,
  scannerResponse,
  sendAllReportsToEmailParams,
  sendAllReportsToEmailResponse,
  sendReportToEmailParams,
  sendReportToEmailResponse,
  BuyAllPackagesParams,
  BuyAllPackagesResponse,
  scannerCountResponse
} from './types'
import { api } from '..'

const PREFIX = '/scanner'

const scanner = async (data: scannerParams) => {
  return await api.post<scannerResponse>(PREFIX + '/', data)
}
const checkScannerState = async (params: checkScannerStateParams) => {
  return await api.get<checkScannerStateReponse>(PREFIX + '/check-scanner-state', { params })
}
const getPackage = async (params: getPackageParams) => {
  return await api.get<getPackageResponse>(PREFIX + '/package', { params })
}
const getAllPackages = async (params: getAllPackagesParams) => {
  return await api.get<getAllPackagesResponse>(PREFIX + '/all-packages', { params })
}
const buyAllPackages = async (data: BuyAllPackagesParams) => {
  return await api.post<BuyAllPackagesResponse>(PREFIX + '/buy-all-packages', data)
}
const buyPackage = async (data: BuyPackageParams) => {
  return await api.post<BuyPackageResponse>(PREFIX + '/buy-package', data)
}
const sendReportToEmail = async (data: sendReportToEmailParams) => {
  return await api.post<sendReportToEmailResponse>(PREFIX + '/send-report-to-email', data)
}
const sendAllReportsToEmail = async (data: sendAllReportsToEmailParams) => {
  return await api.post<sendAllReportsToEmailResponse>(PREFIX + '/send-all-reports-to-email', data)
}
const scannerCount = async () => {
  return await api.get<scannerCountResponse>(PREFIX + '/scanner-count')
}

export default {
  scanner,
  getPackage,
  checkScannerState,
  buyAllPackages,
  buyPackage,
  sendReportToEmail,
  sendAllReportsToEmail,
  getAllPackages,
  scannerCount
}
