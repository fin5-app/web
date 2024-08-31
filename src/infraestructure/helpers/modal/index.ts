import { ModalVariant } from '../../constants/modal'

export const getModalSize = (variant: ModalVariant): string => {
  switch (variant) {
    case ModalVariant.Small:
      return 'w-[550px]'
    case ModalVariant.Medium:
      return 'w-[850px]'
    case ModalVariant.Large:
      return 'w-[1050px]'
  }
}
