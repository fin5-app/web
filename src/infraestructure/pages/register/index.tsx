import { FC } from 'react'
import { LoginHeader } from '../login/components/LoginHeader'
import { LoginForm } from '../login/components/LoginForm'
import { LoginFooter } from '../login/components/LoginFooter'

export const RegisterPage: FC = () => {
  return (
    <div className='min-h-screen bg-primary-100 w-full justify-center flex'>
      <div className='w-1/2 flex items-center flex-col'>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  )
}
