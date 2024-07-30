import { FC } from 'react'
import { Button } from '../../../components/button';
import { useRegisterController } from '../controller';

export const RegisterForm: FC = () => {
    const { handleNavigateToLoginPage, handleBlur, handleChange, handleSubmit, values, isPending } = useRegisterController();
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
                <label className='text-white text-normal text-sm'>Nombre</label>
                <input
                    className="peer block w-full rounded-md border border-borderPrimary-100 py-[5px] px-3 text-sm outline-2 bg-primary-100 text-white"
                    id="first_name"
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    required
                    minLength={6}
                />
            </div>
            <div className='space-y-2'>
                <label className='text-white text-normal text-sm'>Apellido</label>
                <input
                    className="peer block w-full rounded-md border border-borderPrimary-100 py-[5px] px-3 text-sm outline-2 bg-primary-100 text-white"
                    id="last_name"
                    type="text"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    required
                    minLength={6}
                />
            </div>
            <div className='space-y-2'>
                <label className='text-white text-normal text-sm'>Contraseña</label>
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
                <Button variant='primary' text='Registrarse' isLoading={isPending} onClick={handleSubmit} />
                <Button variant='secondary' text='Inicia Sesión' onClick={handleNavigateToLoginPage} />
            </div>
        </div>
    )
}
