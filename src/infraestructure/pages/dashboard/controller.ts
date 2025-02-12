import { useGetTransactions } from '@hooks/transactions/useGetTransactions'
import { useAuthStore } from '../../zustand/auth/useAuthStore'
import { useGetCashFlow } from '@hooks/cash-flow/useGetCashFlow'

export const useDashboardController = () => {
  const { user } = useAuthStore()
  const { data: cash_flow, isLoading: isLoadingCashflow } = useGetCashFlow()
  const { data: transactions, isLoading: isLoadingTransactions } =
    useGetTransactions()

  return {
    user,
    cash_flow,
    isLoadingCashflow,
    transactions,
    isLoadingTransactions,
  }
}
