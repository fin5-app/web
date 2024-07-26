import { FC } from "react"
import { AuthHeader } from "../../components/auth-header"
import { LoginForm } from "./components/LoginForm"
import { AuthFooter } from "../../components/auth-footer"

export const LoginPage: FC = () => {
  return (
    <div className='min-h-screen bg-primary-100 w-full justify-center flex'>
      <div className='w-1/2 flex items-center flex-col'>
        <AuthHeader />
        <LoginForm />
        <AuthFooter />
      </div>
    </div>
  )
}
