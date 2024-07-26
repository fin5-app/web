import { useEffect } from "react";
import { useAuthenticateUser } from "../../hooks/auth/useAuthenticateUser";
import { useAuthStore } from "../../zustand/auth/useAuthStore";
import { useFormik } from "formik";
import { LOGIN_FORM_SCHEMA, LOGIN_FORM_VALUES } from "./schema";

export const useLoginController = () => {
    const { mutateAsync: authenticate, isSuccess, data, isPending } = useAuthenticateUser();
    
    const { login } = useAuthStore();

    const { errors, handleBlur, handleSubmit, values, handleChange } = useFormik<LOGIN_FORM_VALUES>({
        initialValues: { email: '', password: '' },
        onSubmit: (values) => handleSubmitForm(values),
        validationSchema: LOGIN_FORM_SCHEMA
    });
    const handleSubmitForm: (values: LOGIN_FORM_VALUES) => Promise<void> = async ({ email, password }) => {
        authenticate({ email, password })
    };

    useEffect(() => {
        if (data && isSuccess) {
            login(data.user, data.token, true);
        }
    }, [data, isSuccess, login])

    return {
        handleSubmit,
        values,
        handleBlur,
        handleChange,
        errors,
        isPending,
    }
}