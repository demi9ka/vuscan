import { PackageType } from '@/store/scanner-store'

export type scannerResponse =
  | {
      status: 0
      id: string
      url: string
      attempsLeft?: number
    }
  | {
      status: 1
    }
  | {
      status: 2
      id: string
      data: PackageType[]
      url: string
    }

export type scannerParams = {
  url: string
}
export type checkScannerStateParams = {
  id: string
}
export type checkScannerStateReponse = { data: PackageType[]; isFinished: boolean; url: string }
export type BuyAllPackagesParams = {
  scannerId: string
}
export type BuyAllPackagesResponse = {
  url: string
  orderId: string
}
export type BuyPackageParams = {
  packageId: number
  scannerId: string
}
export type BuyPackageResponse = {
  url: string
  orderId: string
}
export type getPackageParams = {
  packageId: number
  scannerId: string
}
export type getPackageResponse =
  | {
      isBuy: false
      links?: string[]
      baseLinks: string[]
      price: number
    }
  | {
      isBuy: true
      isFullBuy?: true
      links: string[]
      time?: number
    }
  | undefined
export type getAllPackagesParams = {
  scannerId: string
}
export type getAllPackagesResponse =
  | {
      isBuy: false
      oldPrice: number
      price: number
    }
  | {
      isBuy: true
      time: number
    }
export type sendReportToEmailResponse = {
  result: boolean
}
export type sendReportToEmailParams = {
  email: string
  scannerId: string
  packageId: number
}
export type sendAllReportsToEmailResponse = {
  result: boolean
}
export type sendAllReportsToEmailParams = {
  email: string
  scannerId: string
}
export type scannerCountResponse = {
  count: number
}
export type applyPromocodeParams = {
  scannerId: string
  packageId?: number
  promocode: string
  isFullScan?: boolean
}
export type applyPromocodeResponse = {
  result: boolean
}
