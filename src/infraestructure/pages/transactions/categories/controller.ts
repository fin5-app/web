import React, { ReactNode } from 'react'
import { useModal } from '../../../providers/modal'

export const useTransactionCategoriesController = () => {
  const { showModal } = useModal()

  const handleOpenModal = (modalContent: ReactNode) => {
    showModal(modalContent)
  }

  return { handleOpenModal }
}
