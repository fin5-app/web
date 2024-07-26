
import { AxiosResponse } from "axios";
import { AXIOS_INSTANCE } from "../../api/client";
import { GetCashFlowResponse, GetDollarBlueResponse } from "./types";

export default class CashFlowService {
    async getCashFlow() {
        const response: AxiosResponse<GetCashFlowResponse> = await AXIOS_INSTANCE.get(`/cash-flow`);
        return response.data;
    }
    
    async getDollarBlue() {
        const response: AxiosResponse<GetDollarBlueResponse> = await AXIOS_INSTANCE.get('/cash-flow/dollar-blue')
        return response.data
    }
}