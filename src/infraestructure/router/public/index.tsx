import { Navigate, Route, Routes } from 'react-router-dom'
import { FC } from 'react'
import { Faq } from '@pages/faq/Faq'
import { Landing } from '@pages/landing/Landing'
import { Login } from '@pages/login/Login'
import { Register } from '@pages/register/Register'
import { ForgotPassword } from '@pages/forgot-password/ForgotPassword'

export const PublicRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  )
}
