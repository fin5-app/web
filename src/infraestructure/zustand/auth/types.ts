import { User } from "../../../domain/models/User";

export interface AuthStateStore {
    authenticated: boolean;
    token?: string;
    user?: User;
    login: (user: { first_name: string, last_name: string, email: string }, token: string, authenticated: boolean) => void;
    logout: () => void;
}

