import * as Yup from 'yup'

export const CREATE_TRANSACTION_CATEGORY_FORM_SCHEMA = Yup.object().shape({
  name: Yup.string().required(),
})

export interface CREATE_TRANSACTION_CATEGORY_VALUES {
  name: string
}

export const CREATE_TRANSACTION_CATEGORY_INITIAL_VALUES: CREATE_TRANSACTION_CATEGORY_VALUES =
  { name: '' }
