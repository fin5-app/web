import { useEffect } from "react";
import { useAuthenticateUser } from "../../hooks/auth/useAuthenticateUser";
import { useAuthStore } from "../../zustand/auth/useAuthStore";
import { useFormik } from "formik";
import { REGISTER_FORM_SCHEMA, REGISTER_FORM_VALUES } from "./schema";
import { useNavigate } from "react-router-dom";
import { useCreateUser } from "../../hooks/auth/useCreateUser";

export const useRegisterController = () => {
    const { mutateAsync: createUser, isSuccess: isSuccessfullUserCreated, data: createdUser, isPending: isCreatingUser } = useCreateUser();
    // const { login } = useAuthStore();
    const navigate = useNavigate();
    const { errors, handleBlur, handleSubmit, values, handleChange } = useFormik<REGISTER_FORM_VALUES>({
        initialValues: { email: '', password: '', last_name: '', first_name: '' },
        onSubmit: (values) => handleSubmitForm(values),
        validationSchema: REGISTER_FORM_SCHEMA
    });

    const handleSubmitForm: (values: REGISTER_FORM_VALUES) => Promise<void> = async ({ email, password, first_name, last_name }) => {
        createUser({ email, password, first_name, last_name })
    };

    const handleNavigateToLoginPage = () => {
        navigate('/login')
    }

    // useEffect(() => {
    //     if (createdUser && isSuccessfullUserCreated) {
    //         // login(data.user, data.token, true);
    //         authenticate(createdUser.user.email, )
    //     }
    // }, [createdUser, isSuccessfullUserCreated])

    return {
        handleSubmit,
        values,
        handleBlur,
        handleChange,
        errors,
        isPending: false,
        handleNavigateToLoginPage,
    }
}