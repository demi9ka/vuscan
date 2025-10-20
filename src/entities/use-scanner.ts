import api from '@/shared/api'
import { scannerParams } from '@/shared/api/scanner/types'
import { useMutation } from '@tanstack/react-query'

export const useScanner = () => {
  return useMutation({
    mutationFn: async (params: scannerParams) => (await api.scanner.scanner(params)).data
  })
}
