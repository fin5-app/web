import * as Yup from 'yup'

export const LOGIN_FORM_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
})

export interface LOGIN_FORM_VALUES {
    email: string;
    password: string;
}