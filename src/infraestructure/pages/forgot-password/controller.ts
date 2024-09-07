import { useFormik } from 'formik'

import { useNavigate } from 'react-router-dom'
import {
  FORGOT_PASSWORD_FORM_VALUES,
  FORGOT_PASSWORD_FORM_SCHEMA,
} from './schema'

export const useForgotPasswordController = () => {
  const navigate = useNavigate()
  const { errors, handleBlur, handleSubmit, values, handleChange } =
    useFormik<FORGOT_PASSWORD_FORM_VALUES>({
      initialValues: { email: '' },
      onSubmit: (values) => handleSubmitForm(values),
      validationSchema: FORGOT_PASSWORD_FORM_SCHEMA,
    })

  const handleSubmitForm: (
    values: FORGOT_PASSWORD_FORM_VALUES
  ) => Promise<void> = async (_props) => {
    //TODO: AWAIT BACKEND FOR INTEGRATION FORGOT PASSWORD FLUX
  }

  const handleNavigateToLoginPage = () => {
    navigate('/login')
  }

  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    errors,
    handleNavigateToLoginPage,
  }
}
