export type CountryResponse = string[]
export type CityResponse = string[]
export type InfoResponse = { user_count: number; order_count: number; complaint_count: number }
export type BlockDataResponse = {
  data: {
    id: number
    name: string
    userId: number
    phone: string
    content: string
    status: number
  }[]
  isLastPage: false
}
export type ComplaintsDataResponse = {
  data: {
    id: number
    masterName: string
    clientName: string
    clientId: number
    clientPhone: string
    content: string
  }[]
  isLastPage: false
}
export type NumberDataResponse = {
  data: {
    id: number
    userId: number
    name: string
    phone: string
    suspicion: string
  }[]
  isLastPage: false
}

export type CityParams = {
  country?: string
}
