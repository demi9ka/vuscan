import api from '@/shared/api'
import { BuyAllPackagesParams } from '@/shared/api/scanner/types'
import { useMutation } from '@tanstack/react-query'

export const useBuyAllPackages = () => {
  return useMutation({
    mutationFn: async (params: BuyAllPackagesParams) => (await api.scanner.buyAllPackages(params)).data,
  })
}
