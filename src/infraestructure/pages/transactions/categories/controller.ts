import { ReactNode, useContext } from 'react'
import { ModalVariant } from '../../../constants/modal'
import ModalContext from '../../../providers/modal'

export const useTransactionCategoriesController = () => {
  const { showModal } = useContext(ModalContext)

  const handleOpenModal = (
    modalContent: ReactNode,
    title: string,
    variant?: ModalVariant
  ) => {
    showModal(modalContent, title, variant)
  }

  return { handleOpenModal }
}
