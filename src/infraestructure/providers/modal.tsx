import React, { createContext, useContext, useState, ReactNode } from 'react'
import Modal from '../components/modal'

interface ModalContextProps {
  showModal: (content: ReactNode) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState<ReactNode>(null)

  const showModal = (modalContent: ReactNode) => {
    setContent(modalContent)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setContent(null)
  }

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
