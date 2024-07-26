import * as Yup from 'yup'

export const REGISTER_FORM_SCHEMA = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
})

export interface REGISTER_FORM_VALUES {
    email: string;
    password: string;
    first_name: string;
    last_name: string
}