import { FC } from 'react'
import { FontVariant } from '../../constants/fonts'
import { useStyles } from './useStyles'

interface TextProps {
  fontVariant: FontVariant
  text: string
  className?: string
  textColor?: string
}

export const Text: FC<TextProps> = (props) => {
  const { fontVariant, text, className, textColor } = props
  const { Styles } = useStyles({ variant: fontVariant, color: textColor })

  return <p className={`${className} ${Styles.text}`}>{text}</p>
}
