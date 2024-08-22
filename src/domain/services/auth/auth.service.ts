import { AxiosResponse } from 'axios'
import { AXIOS_INSTANCE } from '../../api/client'
import {
  AuthenticateUserResponse,
  GoogleSignInResponse,
  RegisterUserResponse,
} from './types'

export default class AuthService {
  async authenticateUser(email: string, password: string) {
    const response: AxiosResponse<AuthenticateUserResponse> =
      await AXIOS_INSTANCE.post('/auth/token', {
        email,
        password,
      })
    return response.data
  }

  async registerUser(
    email: string,
    password: string,
    first_name: string,
    last_name: string
  ) {
    const response: AxiosResponse<RegisterUserResponse> =
      await AXIOS_INSTANCE.post('/auth/sign-up', {
        email,
        password,
        first_name,
        last_name,
      })
    return response.data
  }

  async googleSignInRedirect() {
    const response: AxiosResponse<GoogleSignInResponse> =
      await AXIOS_INSTANCE.get(`/auth/google`)
    return response.data
  }
  async googleSignIn(code: string) {
    const response: AxiosResponse<AuthenticateUserResponse> =
      await AXIOS_INSTANCE.get(`/auth/google/callback?code=${code}`)
    return response.data
  }
  // async googleSignIn(code: string) {
  //   const response: AxiosResponse<AuthenticateUserResponse> =
  //     await AXIOS_INSTANCE.get(`/auth/google/callback`, {
  //       params: { code },
  //     })
  //   return response.data
  // }
}
