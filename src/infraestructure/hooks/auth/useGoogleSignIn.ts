import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../domain/services/auth/auth.service'
import { useAuthStore } from '../../zustand/auth/useAuthStore'

export const useGoogleSignIn = () => {
  const auth_service = new AuthService()
  const { login } = useAuthStore()

  const redirectMutation = useMutation({
    mutationKey: ['google-redirect-uri'],
    mutationFn: () => auth_service.googleSignInRedirect(),
  })

  const mutation = useMutation({
    onSuccess: (data) => login(data.user, data.token, true),
    mutationKey: ['google-sign-in'],
    mutationFn: ({ code }: { code: string }) => auth_service.googleSignIn(code),
  })

  return {
    signIn: redirectMutation.mutateAsync,
    error: redirectMutation.error,
    data: redirectMutation.data,
    authenticate: mutation.mutateAsync,
    authenticationResponse: mutation.data,
  }
}
