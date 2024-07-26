import { useQuery } from '@tanstack/react-query';
import CashFlowService from '../../../domain/services/cash-flow/cash-flow.service';

export const useGetCashFlow = () => {
    const cash_flow_service = new CashFlowService();
    return useQuery({
        queryKey: ['get-cash-flow'],
        queryFn: () => cash_flow_service.getCashFlow(),
    });
}
