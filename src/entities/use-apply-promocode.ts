import { toast } from '@/feature/toast'
import api from '@/shared/api'
import { applyPromocodeParams } from '@/shared/api/scanner/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export const useApplyPromocode = () => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  return useMutation({
    mutationFn: async (data: applyPromocodeParams) => (await api.scanner.applyPromocode(data)).data,

    onSuccess: (data, { scannerId, isFullScan }) => {
      if (!data.result) return toast(t('toast.promocode-error'), 'error')
      toast(t('toast.promocode-success'), 'success')
      if (isFullScan) queryClient.invalidateQueries({ queryKey: ['scanner', 'get-all-packages', { scannerId }] })
      queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package'], exact: false })
    },
  })
}
