import { useContext, useEffect } from 'react'
import { useCreateTransactionCategory } from '@hooks/transactions/useCreateTransactionCategory'
import ModalContext from '@providers/modal'
import { useFormik } from 'formik'
import {
  CREATE_TRANSACTION_CATEGORY_INITIAL_VALUES,
  CREATE_TRANSACTION_CATEGORY_VALUES,
} from './schema'

export const useController = () => {
  const { closeModal } = useContext(ModalContext)

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik<CREATE_TRANSACTION_CATEGORY_VALUES>({
      initialValues: CREATE_TRANSACTION_CATEGORY_INITIAL_VALUES,
      onSubmit: (values) => handleSubmitForm(values),
    })
  const { mutateAsync, data } = useCreateTransactionCategory()

  const handleSubmitForm = (values: CREATE_TRANSACTION_CATEGORY_VALUES) => {
    mutateAsync({ name: values.name })
  }

  useEffect(() => {
    if (data) {
      closeModal()
    }
  }, [data])

  return {
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    touched,
    closeModal,
  }
}
