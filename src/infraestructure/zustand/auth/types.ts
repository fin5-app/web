export interface AuthStateStore {
    authenticated: boolean;
    token?: string;
    user?: {
        first_name: string;
        last_name: string;
        email: string;
    }
    login: (user: { first_name: string, last_name: string, email: string }, token: string, authenticated: boolean) => void;
    logout: () => void;
}

