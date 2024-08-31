import { FontVariant } from '../../constants/fonts'
import { getFontVariantStyles } from '../../helpers/fonts'

interface StyleProps {
  variant: FontVariant
  color?: string
}

export const useStyles = (props: StyleProps) => {
  const { variant, color } = props
  const textStyle = getFontVariantStyles(variant, color)
  return {
    Styles: { text: textStyle },
  }
}
