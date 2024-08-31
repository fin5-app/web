import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../domain/services/auth/auth.service'

export const useAuthenticateUser = () => {
  const auth_service = new AuthService()
  return useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      auth_service.authenticateUser(email, password),
  })
}
