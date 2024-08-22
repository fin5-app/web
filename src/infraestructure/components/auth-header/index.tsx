import Fin5 from '../../../assets/fin5.png'
import { FC } from "react"

export const AuthHeader: FC = () => {
  return (
    <div className='flex flex-col items-center space-y-4 pt-12 pb-8'>
      <img src={Fin5} style={{ width: 75, height: 75 }} alt={'Fin5 Logo'} />
      <p className='text-center text-xl font-light  text-white'>
        Iniciar sesión en Fin5
      </p>
    </div>
  )
}
