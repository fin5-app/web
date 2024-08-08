import { FC, useState } from 'react'
import { AuthHeader } from '../../components/auth-header'
import { LoginForm } from './components/LoginForm'
import { AuthFooter } from '../../components/auth-footer'
import { Fin5Loader } from '../../components/fin5-loader'

export const LoginPage: FC = () => {
  const [isGoogleAuthenticating, setIsGoogleAuthenticating] =
    useState<boolean>(false)
  if (isGoogleAuthenticating) return <Fin5Loader />
  return (
    <div className="min-h-screen bg-primary-100 w-full justify-center flex">
      <div className="w-1/2 flex items-center flex-col">
        <AuthHeader />
        <LoginForm setIsGoogleAuthenticating={setIsGoogleAuthenticating} />
        <AuthFooter />
      </div>
    </div>
  )
}
