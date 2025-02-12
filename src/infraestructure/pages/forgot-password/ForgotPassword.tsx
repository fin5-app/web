import { FC } from 'react'
import { AuthHeader } from '@components/auth-header/AuthHeader'
import { AuthFooter } from '@components/auth-footer/AuthFooter'
import { ForgotPasswordForm } from './components/ForgotPasswordForm'

export const ForgotPassword: FC = () => {
  return (
    <div className="min-h-screen bg-primary-100 w-full justify-center flex">
      <div className="w-1/2 flex items-center flex-col">
        <AuthHeader />
        <ForgotPasswordForm />
        <AuthFooter />
      </div>
    </div>
  )
}
