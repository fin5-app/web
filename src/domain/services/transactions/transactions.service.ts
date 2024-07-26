import { AxiosResponse } from "axios";
import { AXIOS_INSTANCE } from "../../api/client";
import { GetTransactions } from "./types";

export default class TransactionsService {
    async getTransactions(page: number, items: number, q?: string) {
        let query = `page=${page}&items=${items}`;
        if (q) {
            query = query+`&q=${q}`
        }
        console.log("🚀 ~ TransactionsService ~ getTransactions ~ query:", query)
        const response: AxiosResponse<GetTransactions> = await AXIOS_INSTANCE.get(`/transaction/list?${query}`);
        return response.data
    }
}