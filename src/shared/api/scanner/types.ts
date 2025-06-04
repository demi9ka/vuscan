// 0-Успешно, 1-неверный url, 2-большая очередь
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

export type QueueParams = {
  email: string
}
export type QueueResponse = {
  result: boolean
}
export type BuyAllParams = {
  scannerId: string
}
export type BuyAllResponse = {
  paymentLink: string
}
