import { useQuery } from '@tanstack/react-query'
import TransactionsService from '../../../domain/services/transactions/transactions.service'

export const useGetTransactionsCategories = (
  page: number = 1,
  items: number = 3,
  q?: string
) => {
  const transactions_service = new TransactionsService()
  return useQuery({
    queryKey: ['get-transaction-categories', page, items, q],
    queryFn: () =>
      transactions_service.getTransactionCategories(page, items, q),
  })
}
