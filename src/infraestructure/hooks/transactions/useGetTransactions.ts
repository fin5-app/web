import { useQuery } from '@tanstack/react-query';
import TransactionsService from '../../../domain/services/transactions/transactions.service';

export const useGetTransactions = (page: number = 1, items: number = 3, q?: string) => {
    const transactions_service = new TransactionsService();
    return useQuery({
        queryKey: ['get-transactions', page, items, q],
        queryFn: () => transactions_service.getTransactions(page, items, q),
    });
}
