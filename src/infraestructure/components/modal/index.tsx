import React, { ReactNode } from 'react'
import PlusIcon from '../../../assets/plus.svg'
import { ModalVariant } from '../../constants/modal'
import { getModalSize } from '../../helpers/modal'
import ReactDOM from 'react-dom'
import { Text } from '../text'
import { FontVariant } from '../../constants/fonts'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  variant: ModalVariant
  title: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant,
  title,
}) => {
  if (!isOpen) return null

  const modalStyles = getModalSize(variant)

  return ReactDOM.createPortal(
    <div className={`fixed inset-0 flex items-center justify-center z-50`}>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div
        className={`bg-secondary-100 rounded-lg z-10 shadow-lg ${modalStyles}`}
      >
        <div className="flex justify-between items-center p-[1rem] border-b-[1px] border-borderPrimary-100">
          <Text fontVariant={FontVariant.Subtitle1} text={title} />
          <PlusIcon
            className="transform rotate-45 text-text-primary w-5 h-5 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="p-[1rem]">{children}</div>
      </div>
    </div>,
    document.getElementById('root') as HTMLElement
  )
}

export default Modal
