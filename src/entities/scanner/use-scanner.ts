import api from '@/shared/api'
import { ScannerParams } from '@/shared/api/scanner/types'
import { useMutation } from '@tanstack/react-query'

export const useScanner = () => {
  return useMutation({
    mutationFn: async (params: ScannerParams) => (await api.scanner.scanner(params)).data
  })
}
