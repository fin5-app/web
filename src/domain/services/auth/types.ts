export interface AuthenticateUserResponse {
    token: string;
    user: {
        first_name: string;
        last_name: string;
        email: string
    };
}