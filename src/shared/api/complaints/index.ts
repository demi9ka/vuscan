import { api } from '..'
import {
  mockCity,
  mockComplaintsData,
  mockBlockData,
  mockCountry,
  mockInfo,
  mockNumberData,
  mockUnblock,
  mockUnrestrict
} from './mock'

const PREFIX = '/support'

const country = async () => {
  return mockCountry
  return await api.get<CountryResponse>(PREFIX + '/country')
}
const city = async (params: CityParams) => {
  return mockCity
  return await api.get<CityResponse>(PREFIX + '/city', { params })
}
const info = async (params: InfoParams) => {
  return mockInfo
  return await api.get<InfoResponse>(PREFIX + '/info', { params })
}
const complaintsData = async (params: ComplaintsDataParams) => {
  return mockComplaintsData
  return await api.get<ComplaintsDataResponse>(PREFIX + '/complaints-data', { params })
}
const blockData = async (params: BlockDataParams) => {
  return mockBlockData
  return await api.get<BlockDataResponse>(PREFIX + '/block-data', { params })
}
const numberData = async (params: NumberDataParams) => {
  return mockNumberData
  return await api.get<NumberDataResponse>(PREFIX + '/number-data', { params })
}
const unrestrict = async (data: UnrestrictParams) => {
  return mockUnrestrict
  return await api.post<UnrestrictResponse>(PREFIX + '/unrestrict', data)
}
const unblock = async (data: UnblockParams) => {
  return mockUnblock
  return await api.post<UnblockResponse>(PREFIX + '/unblock', data)
}

export default {
  country,
  city,
  info,
  complaintsData,
  blockData,
  unrestrict,
  unblock
}
