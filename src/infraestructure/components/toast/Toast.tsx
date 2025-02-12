import React, { FC, ReactNode, useMemo } from 'react'
import CloseIcon from '../../../assets/x.svg'
import CheckIcon from '../../../assets/circle-check.svg'
import ErrorIcon from '../../../assets/circle-alert.svg'
import { FontVariant } from '../../constants/fonts'
import { ToastVariant } from '../../constants/toast'
import { Text } from '@components/text/Text'

type ToastProps = {
  message: string
  variant: ToastVariant
}

type ToastIconProps = {
  icon: ReactNode
  styles: string
}
const getIconFromVariant = (variant: ToastVariant): ToastIconProps => {
  return variant === ToastVariant.SUCCESS
    ? { icon: <CheckIcon />, styles: 'text-success-100 ' }
    : { icon: <ErrorIcon />, styles: 'text-error-100 ' }
}

export const Toast: FC<ToastProps> = ({ message, variant }) => {
  const { icon, styles } = useMemo(() => getIconFromVariant(variant), [variant])

  return (
    <div
      className="flex items-center w-full max-w-xs p-3 gap-2 bg-secondary-100 border-borderPrimary-100 rounded-[6px] border-[1px] "
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center  w-8 h-8 rounded-lg ${styles}`}
      >
        {icon}
      </div>
      <Text
        text={message}
        fontVariant={FontVariant.Caption}
        textColor="text-text-primary"
      />
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5  text-text-primary hover:text-text-secondary rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 "
      >
        <CloseIcon />
      </button>
    </div>
  )
}
