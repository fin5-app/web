import { FC } from 'react'
import { Button } from '../../../components/button/index'
import { useForgotPasswordController } from '../controller'

export const ForgotPasswordForm: FC = () => {
  const {
    handleNavigateToLoginPage,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
  } = useForgotPasswordController()
  return (
    <div className="bg-secondary-100 border-borderPrimary-100 border-[1px] p-4 rounded-md space-y-4 w-[320px]">
      <div className="space-y-2">
        <span className="text-white text-normal text-sm ">
          Introduce tu dirección de correo electrónico asociada a tu cuenta para
          restablecer tu contraseña
        </span>
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-white text-normal text-sm">
          Dirección de correo electrónico
        </label>
        <input
          className="peer block w-full rounded-md border border-borderPrimary-100 py-2 px-3 text-sm outline-2 bg-primary-100 text-white"
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

      <div className="space-y-4 flex flex-col py-2">
        <Button
          variant="primary"
          text="Recuperar contraseña"
          onClick={handleSubmit}
        />
        <Button
          variant="secondary"
          text="Volver"
          onClick={handleNavigateToLoginPage}
        />
      </div>
    </div>
  )
}
