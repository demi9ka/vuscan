import { toast } from '@/feature/toast'
import api from '@/shared/api'
import { sendReportToEmailParams } from '@/shared/api/scanner/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export const useSendReportToEmail = () => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  return useMutation({
    mutationFn: async (params: sendReportToEmailParams) => (await api.scanner.sendReportToEmail(params)).data,
    onSuccess: (data, { packageId, scannerId }) => {
      if (!data.result) return toast(t('toast.send-report-error'), 'error')
      toast(t('toast.send-report-success'), 'success')
      queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package', { scannerId, packageId }] })
    }
  })
}
