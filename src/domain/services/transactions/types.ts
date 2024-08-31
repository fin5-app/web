import { Transaction } from '../../models/Transaction'
import { Category } from '../../models/Category'

export interface GetTransactions {
  success: boolean
  transactions: Transaction[]
  total_pages: number
}

export interface GetTransactionCategories {
  success: boolean
  categories: Category[]
  total_pages: number
}
