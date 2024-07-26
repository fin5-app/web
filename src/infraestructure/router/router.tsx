import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PrivateRouter } from './private'
import { PublicRouter } from './public'
import { useAuthStore } from '../zustand/auth/useAuthStore';

export const AppRouter: FC = () => {
    const { authenticated } = useAuthStore();
    return (
        <BrowserRouter>
            {
                authenticated ?
                    <PrivateRouter />
                    :
                    <PublicRouter />
            }
        </BrowserRouter>
    )
}
