import { FC } from "react"
import { LoginHeader } from "./components/LoginHeader"
import { LoginForm } from "./components/LoginForm"
import { LoginFooter } from "./components/LoginFooter"

export const LoginPage: FC = () => {
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
