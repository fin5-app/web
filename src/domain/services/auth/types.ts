export interface AuthenticateUserResponse {
  token: string
  user: {
    first_name: string
    last_name: string
    email: string
  }
}

export interface RegisterUserResponse {
  success: boolean
  user: {
    first_name: string
    last_name: string
    email: string
    phone_number: string | null
  }
}

export interface GoogleSignInResponse {
  url: string
}
