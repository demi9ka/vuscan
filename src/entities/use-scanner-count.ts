import api from '@/shared/api'
import { useQuery } from '@tanstack/react-query'

export const useScannerCount = () => {
  return useQuery({
    queryFn: async () => (await api.scanner.scannerCount()).data,
    queryKey: ['scanner', 'scanner-count']
  })
}
