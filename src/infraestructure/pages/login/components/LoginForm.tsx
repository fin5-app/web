import { FC } from "react"
import { Link } from "react-router-dom";
import { Button } from '../../../components/button/index';
import { useLoginController } from "../controller";

export const LoginForm: FC = () => {
  const { handleBlur, handleChange, handleSubmit, values, isPending} = useLoginController();
  return (
    <div className='bg-secondary-100 border-borderPrimary-100 border-[1px] p-4 rounded-md space-y-4 w-[320px]'>
      <div className='space-y-2'>
        <label className='text-white text-normal text-sm'>Dirección de correo electrónico</label>
        <input
          className="peer block w-full rounded-md border border-borderPrimary-100 py-[5px] px-3 text-sm outline-2 bg-primary-100 text-white"
          id="email"
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
          required
          minLength={6}
        />
      </div>
      <div className='space-y-2'>
        <div className='flex justify-between items-center'>
          <label className='text-white text-normal text-sm'>Contraseña</label>
          <Link to={'#!'} className='underline text-normal text-xs text-blue-600'>¿Olvidaste tu contraseña?</Link>
        </div>
        <input
          className="peer block w-full rounded-md border border-borderPrimary-100 py-[5px] px-3 text-sm outline-2 bg-primary-100 text-white"
          id="password"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange('password')}
          onBlur={handleBlur('password')}
          required
          minLength={6}
        />
      </div>
      <div className='space-y-4 flex flex-col py-2'>
        {/* // set loading in button */}
        <Button variant='primary' text='Iniciar Sesión' isLoading={isPending} onClick={handleSubmit} />
        <Button variant='secondary' text='Regístrate' />
      </div>
    </div>
  )
}

