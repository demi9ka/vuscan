import api from '@/shared/api'
import { BuyAllParams } from '@/shared/api/scanner/types'
import { useMutation } from '@tanstack/react-query'

export const useBuyAll = () => {
  return useMutation({
    mutationFn: async (params: BuyAllParams) => (await api.scanner.buyAll(params)).data
  })
}
