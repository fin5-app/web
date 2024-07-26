import { useQuery } from '@tanstack/react-query';
import CashFlowService from '../../../domain/services/cash-flow/cash-flow.service';

export const useGetDollarBlue = () => {
    const cash_flow_service = new CashFlowService();
    return useQuery({
        queryKey: ['get-dollar-blue'],
        queryFn: () => cash_flow_service.getDollarBlue(),
    });
}
