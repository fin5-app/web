import ChevronUpIcon from '../../../assets/chevron-up.svg'
import { FC, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MAIN_MENU_ITEMS, makeBreadcrumb } from '../../constants/menu-items'

interface BreadCrumbItemProps {
  text: string
}
interface SeparatorProps {
  hide: boolean
}

export const BreadCrumbItem: FC<BreadCrumbItemProps> = (props) => {
  const { text } = props
  return (
    <p className="text-text-primary text-2xl" key={text}>
      {text}
    </p>
  )
}
export const Separator: FC<SeparatorProps> = (props) => {
  const { hide } = props
  if (hide) return null
  return <ChevronUpIcon className="h-5 w-5 rotate-90 text-text-secondary" />
}

export default function Breadcrumb() {
  const { pathname } = useLocation()

  const [breadcrumb, setBreadcrumb] = useState<string[] | null>(null)

  useEffect(() => {
    setBreadcrumb(makeBreadcrumb(MAIN_MENU_ITEMS, pathname))
  }, [pathname])

  return (
    <div className="flex items-center space-x-4 py-4">
      <div className="flex items-center">
        {breadcrumb &&
          breadcrumb.length > 0 &&
          breadcrumb.map((item, index) => {
            return (
              <div
                className="flex items-center justify-center px-1 gap-1"
                key={item}
              >
                <Separator hide={index === 0} />
                <BreadCrumbItem text={item} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
