import { useMutation, useQueryClient } from '@tanstack/react-query'
import TransactionsService from '../../../domain/services/transactions/transactions.service'

export const useCreateTransactionCategory = () => {
  const transaction_service = new TransactionsService()
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ['create-transaction-category'],
    mutationFn: ({ name }: { name: string }) =>
      transaction_service.create_transaction_category(name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-transaction-categories'],
      })
    },
  })
}
