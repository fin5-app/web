import { useFormik } from 'formik'
import { UPDATE_TRANSACTION_CATEGORY_VALUES } from './schema'
import { useContext, useEffect } from 'react'
import ModalContext from '../../../../../providers/modal'
import { useUpdateTransactionCategory } from '../../../../../hooks/transactions/useUpdateTransactionCategory'
import { Category } from '../../../../../../domain/models/Category'

export const useController = (transaction_category: Category) => {
  const { closeModal } = useContext(ModalContext)

  const { errors, handleBlur, handleChange, handleSubmit, values, touched } =
    useFormik<UPDATE_TRANSACTION_CATEGORY_VALUES>({
      initialValues: {
        name: transaction_category.name,
      },
      onSubmit: (values) => handleSubmitForm(values),
    })
  const { mutateAsync, data } = useUpdateTransactionCategory()

  const handleSubmitForm = (values: UPDATE_TRANSACTION_CATEGORY_VALUES) => {
    mutateAsync({ id: transaction_category.id, name: values.name })
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
