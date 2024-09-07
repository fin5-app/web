import * as Yup from 'yup'

export const UPDATE_TRANSACTION_CATEGORY_FORM_SCHEMA = Yup.object().shape({
  name: Yup.string().required(),
})

export interface UPDATE_TRANSACTION_CATEGORY_VALUES {
  name: string
}
