import axios from 'axios'
import { toast } from '@/feature/toast'
import contact from './contact'
import scanner from './scanner'

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    toast(error.response.data.error, 'error')
    return Promise.reject(error)
  },
)

export default {
  contact,
  scanner,
}
