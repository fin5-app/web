import { FontVariant } from '../../constants/fonts'

export const getFontVariantStyles = (variant: FontVariant, color?: string) => {
  switch (variant) {
    case FontVariant.Title:
      return `${color ?? 'text-text-primary'} font-semibold text-4xl`
    case FontVariant.Subtitle1:
      return `${color ?? 'text-text-primary'} text-2xl`
    case FontVariant.Subtitle2:
      return `${
        color ?? 'text-text-primary'
      } text-xs md:text-sm font-medium tracking-wide`
    case FontVariant.Text:
      return `${color ?? 'text-text-primary'} text-sm font-light`
    case FontVariant.Caption:
      return `${color ?? 'text-text-secondary'} text-xs font-normal`
  }
}
