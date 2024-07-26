import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { AuthStateStore } from './types';

export const useAuthStore = create<AuthStateStore>()(
    persist(
        (set) => ({
            authenticated: false,
            token: undefined,
            user: undefined,
            login: (user: { first_name: string, last_name: string, email: string }, token: string, authenticated: boolean) => set({ user, token, authenticated }),
            logout: () => set({ user: undefined, token: undefined, authenticated: false }),
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);
