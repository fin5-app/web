import { AxiosResponse } from "axios";
import { AXIOS_INSTANCE } from "../../api/client";
import { AuthenticateUserResponse } from "./types";

export default class AuthService {
    async authenticateUser(email: string, password: string) {
        const response: AxiosResponse<AuthenticateUserResponse> = await AXIOS_INSTANCE.post('/auth/token', {
            email,
            password
        });
        return response.data;
    }
}