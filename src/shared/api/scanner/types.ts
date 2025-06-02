// 0-Успешно, 1-неверный url, 2-большая очередь
export type ScannerResponse =
  | {
      status: 0
      id: string
    }
  | {
      status: 1
    }
  | {
      status: 2
      price: number
    }

export type ScannerParams = {
  url: string
}
