import api from '@/shared/api'
import { EmailParams } from '@/shared/api/contact/types'
import { useMutation } from '@tanstack/react-query'

export const useContact = () => {
  return useMutation({
    mutationFn: async (params: EmailParams) => (await api.contact.email(params)).data
  })
}
