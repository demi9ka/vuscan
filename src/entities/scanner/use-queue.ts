import api from '@/shared/api'
import { QueueParams } from '@/shared/api/scanner/types'
import { useMutation } from '@tanstack/react-query'

export const useQueue = () => {
  return useMutation({
    mutationFn: async (params: QueueParams) => (await api.scanner.queue(params)).data
  })
}
