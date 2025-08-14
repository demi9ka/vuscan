import { toast } from '@/feature/toast'
import api from '@/shared/api'
import { BuyPackageParams } from '@/shared/api/scanner/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export const useBuyPackage = () => {
  const queryClient = useQueryClient()
  const { t } = useTranslation()
  return useMutation({
    mutationFn: async (data: BuyPackageParams) => (await api.scanner.buyPackage(data)).data,
    onSuccess: (data, variables) => {
      if (!data.result) return toast(t('toast.payment-error'), 'error')
      toast(t('toast.payment-success'), 'success')
      queryClient.invalidateQueries({ queryKey: ['scanner', 'get-package', variables] })
    }
  })
}
