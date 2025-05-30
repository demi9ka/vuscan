import axios from 'axios'
import { showNotification } from '@/feature/notification'
import auth from './auth'
import statistics from './statistics'
import top from './top'
import users from './users'
import profile from './profile'
import payments from './payments'
import prices from './prices'

const jwt = localStorage.getItem('access_token')

export const api = axios.create({
  baseURL: 'http://81.94.150.108:5004',
  headers: {
    'Content-Type': 'application/json',
    Authorization: jwt ? 'Bearer ' + jwt : undefined
  }
})

api.interceptors.response.use(
  response => {
    return response
  },
  error => {
    showNotification({
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default {
  auth,
  statistics,
  top,
  users,
  profile,
  payments,
  prices
}
