import api from '@/shared/api'
import { LoginParams } from '@/shared/api/auth/types'
import { useMutation } from '@tanstack/react-query'

export const useLogin = () => {
  return useMutation({
    mutationFn: async (params: LoginParams) => (await api.auth.login(params)).data
  })
}
