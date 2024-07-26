export interface GetCashFlowResponse {
    success: boolean;
    balance: {
        total_expenses: number;
        total_incomes: number;
        total_saving: number;
    }
}

export interface GetDollarBlueResponse {
    success: boolean;
    dollar_blue: {
        moneda: string;
        casa: string;
        nombre: string;
        compra: number;
        venta: number;
        fechaActualizacion: Date;
    }
}