import { Transaction } from "../../models/Transaction";

export interface GetTransactions {
    success: true;
    transactions: Transaction[];
    total_pages: number;
}