import axios from "axios";
import { useAuthStore } from "../../infraestructure/zustand/auth/useAuthStore";

export const AXIOS_INSTANCE = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
AXIOS_INSTANCE.interceptors.request.use((config: any) => {
    const { token } = useAuthStore.getState();

    if (token) {
        config.headers = {
            ...(config.headers || {}),
            'Authorization': `Bearer ${token}`,
        };
    }
    return config;
});