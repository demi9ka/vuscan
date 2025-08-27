import api from '@/shared/api'
import { getAllPackagesParams } from '@/shared/api/scanner/types'
import { scannerStore } from '@/store'
import { useQuery } from '@tanstack/react-query'

export const useGetAllPackages = (params: getAllPackagesParams) => {
  return useQuery({
    queryFn: async () => (await api.scanner.getAllPackages(params)).data,
    queryKey: ['scanner', 'get-all-packages', { scannerId: params.scannerId }],
    enabled: Boolean(params.scannerId && scannerStore.isFinished),
  })
}
