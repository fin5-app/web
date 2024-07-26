import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/login'
import { RegisterPage } from '../../pages/register'
import { FC } from 'react'
import { LandingPage } from '../../pages/landing'

export const PublicRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
    )
}
