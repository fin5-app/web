import { Category } from "./Category";
import { Currency } from "./Currency";
import { Transaction_Type } from './TransactionType'

export interface Transaction {
    id: number;
    amount: number;
    type_id: number;
    currency_id: number;
    category_id: number;
    created: Date;
    user_id: number;
    category: Category;
    currency: Currency;
    type: Transaction_Type;
}