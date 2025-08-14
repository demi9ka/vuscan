import axios from 'axios'
import { toast } from '@/feature/toast'
import contact from './contact'
import scanner from './scanner'
import { i18next } from '@/feature/locale'

export const api = axios.create({
  baseURL: import.meta.env.DEV ? 'http://localhost:3000/api' : 'https://vuscan.net/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    toast(i18next.t(error.response.data.error), 'error')
    return Promise.reject(error)
  }
)

export default {
  contact,
  scanner
}
