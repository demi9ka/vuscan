import axios from 'axios'
import { toast } from '@/feature/toast'
import contact from './contact'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    toast(error.message, 'error')
    return Promise.reject(error)
  }
)

export default {
  contact
}
