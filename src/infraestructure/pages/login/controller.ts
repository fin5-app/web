import { Dispatch, SetStateAction, useEffect } from 'react'
import { useAuthenticateUser } from '../../hooks/auth/useAuthenticateUser'
import { useAuthStore } from '../../zustand/auth/useAuthStore'
import { useFormik } from 'formik'
import { LOGIN_FORM_SCHEMA, LOGIN_FORM_VALUES } from './schema'
import { useNavigate } from 'react-router-dom'
import { useGoogleSignIn } from '../../hooks/auth/useGoogleSignIn'

interface LoginControllerProps {
  setIsGoogleAuthenticating: Dispatch<SetStateAction<boolean>>
}

export const useLoginController = (props: LoginControllerProps) => {
  const { setIsGoogleAuthenticating } = props
  const {
    mutateAsync: authenticate,
    isSuccess,
    data,
    isPending,
  } = useAuthenticateUser()
  const { login } = useAuthStore()
  const navigate = useNavigate()
  const { data: signInResponse, signIn, authenticate: auth } = useGoogleSignIn()
  const { errors, handleBlur, handleSubmit, values, handleChange } =
    useFormik<LOGIN_FORM_VALUES>({
      initialValues: { email: '', password: '' },
      onSubmit: (values) => handleSubmitForm(values),
      validationSchema: LOGIN_FORM_SCHEMA,
    })

  const handleSubmitForm: (
    values: LOGIN_FORM_VALUES
  ) => Promise<void> = async ({ email, password }) => {
    authenticate({ email, password })
  }

  const handleNavigateToRegisterPage = () => {
    navigate('/register')
  }

  const handleGoogleSignIn = async () => {
    signIn()
  }

  useEffect(() => {
    if (signInResponse) {
      window.location.href = signInResponse.url
    }
  }, [signInResponse])

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search)
      const code = params.get('code')
      if (code) {
        setIsGoogleAuthenticating(true)
        setTimeout(() => {
          auth({ code: code })
        }, 2000)
      }
    }
    handleCallback()
  }, [])

  useEffect(() => {
    if (data && isSuccess) {
      login(data.user, data.token, true)
    }
  }, [data, isSuccess, login])

  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    errors,
    isPending,
    handleNavigateToRegisterPage,
    handleGoogleSignIn,
  }
}
