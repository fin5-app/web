export interface Transaction_Type {
    id: number;
    name: string;
}

export enum TransactionTypes {
    EXPENSE = 'expense',
    INCOME = 'income',
}