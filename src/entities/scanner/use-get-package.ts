import api from '@/shared/api'
import { getPackageParams } from '@/shared/api/scanner/types'
import { useQuery } from '@tanstack/react-query'

export const useGetPackage = (params: getPackageParams) => {
  return useQuery({
    queryFn: async () => (await api.scanner.getPackage(params)).data,
    queryKey: ['scanner', 'get-package', params],
    enabled: Boolean(params.packageId !== undefined && params.scannerId)
  })
}
