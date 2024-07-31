import * as Yup from 'yup'

export const FORGOT_PASSWORD_FORM_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
})

export interface FORGOT_PASSWORD_FORM_VALUES {
    email: string;
}