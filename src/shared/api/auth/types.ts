import { UserType } from '@/app/types'

export type LoginResponse = {
  access_token: string
} & UserType

export type LoginParams = { login: string; password: string }
