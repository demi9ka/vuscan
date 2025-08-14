import { EmailParams, EmailResponse } from './types'
import { api } from '..'

const PREFIX = '/contact'

const email = async (data: EmailParams) => {
  return await api.post<EmailResponse>(PREFIX + '/email', data)
}

export default {
  email
}
