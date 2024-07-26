import { FC } from 'react'
import { AuthHeader } from '../../components/auth-header'
import { AuthFooter } from '../../components/auth-footer'
import { RegisterForm } from './components/register-form'

export const RegisterPage: FC = () => {
  return (
    <div className='min-h-screen bg-primary-100 w-full justify-center flex'>
      <div className='w-1/2 flex items-center flex-col'>
        <AuthHeader />
        <RegisterForm />
        <AuthFooter />
      </div>
    </div>
  )
}
