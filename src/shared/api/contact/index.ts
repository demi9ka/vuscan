import { EmailParams, EmailResponse } from './types'
import { api } from '..'
import { mockEmail } from './mock'

const PREFIX = '/contact'

const email = async (data: EmailParams) => {
  return mockEmail
  return await api.post<EmailResponse>(PREFIX + '/email', data)
}

export default {
  email
}
