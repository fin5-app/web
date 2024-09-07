import { useMutation, useQueryClient } from '@tanstack/react-query'
import TransactionsService from '../../../domain/services/transactions/transactions.service'

export const useUpdateTransactionCategory = () => {
  const transaction_service = new TransactionsService()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['update-transaction-category'],
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      transaction_service.update_transaction_category(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-transaction-categories'],
      })
    },
  })
}
