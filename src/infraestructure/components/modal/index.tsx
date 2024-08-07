import React from 'react'
import ReactDOM from 'react-dom'
import PlusIcon from '../../../assets/plus.svg'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-secondary-100 rounded-lg p-4 z-10 shadow-lg">
        <div className="flex justify-end items-center">
          <PlusIcon
            className="transform rotate-45 text-text-primary w-5 h-5 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  )
}

export default Modal
