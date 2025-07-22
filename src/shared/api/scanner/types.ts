// 0-Успешно, 1-неверный url
export type ScannerResponse =
  | {
      status: 0 | 2
      id: string
    }
  | {
      status: 1
    }
export type ScannerParams = {
  url: string
}
export type checkScannerStateParams = {
  id: string
}
export type checkScannerStateReponse = {
  data: {
    findedLinks?: number
  }[]
}
export type BuyAllParams = {
  scannerId: string
}
export type BuyAllResponse = {
  paymentLink: string
}
export type BuyPackageParams = {
  id: number
  scannerId: string
}
export type BuyPackageResponse = {
  paymentLink: string
}
export type getPackageParams = {
  packageId: number
  scannerId: string
}
export type getPackageResponse = {
  freeLinks?: string
  linkCount?: number
  price?: number

  links?: string[]
}
