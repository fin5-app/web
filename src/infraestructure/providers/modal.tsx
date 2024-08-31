import { FC, ReactNode, createContext, useState } from 'react'
import Modal from '../components/modal'
import { ModalVariant } from '../constants/modal'

interface ModalContextProps {
  showModal: (
    content: ReactNode,
    modalTitle: string,
    modalVariant?: ModalVariant
  ) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps>({
  closeModal: () => {},
  showModal: () => {},
})

const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ReactNode>(null)
  const [variant, setVariant] = useState<ModalVariant>(ModalVariant.Small)
  const [title, setTitle] = useState<string>('')

  const showModal = (
    modalContent: ReactNode,
    modalTitle: string,
    modalVariant?: ModalVariant
  ) => {
    setContent(modalContent)
    setTitle(modalTitle)
    setVariant(modalVariant ?? ModalVariant.Small)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setContent(null)
  }

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        variant={variant}
        title={title}
      >
        {content}
      </Modal>
    </ModalContext.Provider>
  )
}

export default ModalContext
export { ModalProvider }
