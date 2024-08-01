import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../../pages/login'
import { RegisterPage } from '../../pages/register'
import { FC } from 'react'
import { LandingPage } from '../../pages/landing'
import { ForgotPasswordPage } from '../../pages/forgot-password'
import { FaqPage } from '../../pages/faq'

export const PublicRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/faq' element={<FaqPage/>} />
            <Route path='*' element={<Navigate to={'/'} />} />
        </Routes>
    )
}
