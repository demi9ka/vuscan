import api from '@/shared/api'
import { BuyPackageParams } from '@/shared/api/scanner/types'
import { useMutation } from '@tanstack/react-query'

export const useBuyPackage = () => {
  return useMutation({
    mutationFn: async (data: BuyPackageParams) => (await api.scanner.buyPackage(data)).data,
  })
}
