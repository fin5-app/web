// import { formatCurrency } from '../lib/utils/currencty';
// import { getDollarBlue } from '../lib/actions/cash-flow/dollar';

export const SidebarDollarBlue = () => {
    return (
        <div className="bg-purple-300 py-3 px-5 rounded-[6px] flex justify-between items-center border-[1px] border-borderPrimary-100 space-x-4">
            <p className="text-xs font-normal text-text-primary">Dólar Blue:</p>
            {/* <p className="text-xs font-normal text-text-primary">{formatCurrency(cash_flow?.dollar_blue.venta ?? 0, 'ARS')}</p> */}
        </div>
    )
}
