import { FC } from 'react'
import { RegisterForm } from './components/register-form'
import { AuthFooter } from '../../components/auth-footer/AuthFooter'
import { AuthHeader } from '../../components/auth-header/AuthHeader'

export const Register: FC = () => {
  return (
    <div className="min-h-screen bg-primary-100 w-full justify-center flex">
      <div className="w-1/2 flex items-center flex-col">
        <AuthHeader />
        <RegisterForm />
        <AuthFooter />
      </div>
    </div>
  )
}
