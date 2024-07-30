import { useMutation } from "@tanstack/react-query";
import AuthService from "../../../domain/services/auth/auth.service"

export const useCreateUser = () => {
    const auth_service = new AuthService();
    return useMutation({
        mutationKey: ['sign-up'],
        mutationFn: ({ email, password, first_name, last_name }: { email: string; password: string, first_name: string, last_name: string }) => auth_service.registerUser(email, password, first_name, last_name)
    })
}