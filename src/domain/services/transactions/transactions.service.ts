import { AxiosResponse } from 'axios'
import { AXIOS_INSTANCE } from '../../api/client'
import { GetTransactions, GetTransactionCategories } from './types'

export default class TransactionsService {
  async getTransactions(page: number, items: number, q?: string) {
    let query = `page=${page}&items=${items}`
    if (q) {
      query = query + `&q=${q}`
    }

    const response: AxiosResponse<GetTransactions> = await AXIOS_INSTANCE.get(
      `/transaction/list?${query}`
    )
    return response.data
  }

  async getTransactionCategories(page: number, items: number, q?: string) {
    let query = `page=${page}&items=${items}`
    if (q) {
      query = query + `&q=${q}`
    }

    const response: AxiosResponse<GetTransactionCategories> =
      await AXIOS_INSTANCE.get(`/transaction/transaction-categories?${query}`)
    return response.data
  }
}
