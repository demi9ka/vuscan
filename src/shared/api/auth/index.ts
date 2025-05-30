import axios from 'axios'
import { LoginParams, LoginResponse } from './types'
import { api } from '..'

const PREFIX = '/auth'

const login = async (data: LoginParams) => {
  return await api.post<LoginResponse>(PREFIX + '/login_adm', {
    headers: {
      Authorization: ''
    },
    params: data
  })
}

const refresh = async () => {
  const jwt_ = localStorage.getItem('access_token')
  const { data, status }: { data: any; status: number } = await api.post(
    PREFIX + '/refresh_token',
    { jwt_ },
    { withCredentials: true }
  )
  if (status !== 200) throw new Error('Не удалось авторизоваться')
  localStorage.setItem('access_token', data.access_token)
  axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`
}

export default {
  login,
  refresh
}
