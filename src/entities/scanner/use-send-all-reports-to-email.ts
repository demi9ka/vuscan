import { toast } from '@/feature/toast'
import api from '@/shared/api'
import { sendAllReportsToEmailParams } from '@/shared/api/scanner/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export const useSendAllReportsToEmail = () => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  return useMutation({
    mutationFn: async (params: sendAllReportsToEmailParams) => (await api.scanner.sendAllReportsToEmail(params)).data,
    onSuccess: (data, { scannerId }) => {
      if (!data.result) return toast(t('toast.send-report-error'), 'error')
      toast(t('toast.send-report-success'), 'success')
      queryClient.invalidateQueries({
        queryKey: ['scanner', 'get-all-packages', { scannerId }],
        exact: false
      })
      queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package'] })
    }
  })
}
