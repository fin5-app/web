import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ChevronDown from '../../../assets/chevron-down.svg'
import ChevronUp from '../../../assets/chevron-up.svg'
import './animations.css'
import { SidebarItemProps } from '../../constants/menu-items'
import { Text } from '../text'
import { FontVariant } from '../../constants/fonts'

export default function SidebarItem(props: SidebarItemProps) {
  const { name, url, icon, routes } = props
  const [openRoutes, setOpenRoutes] = useState<boolean>(false)

  const { pathname } = useLocation()

  const handleOpenRoutes = () => {
    setOpenRoutes((prevState) => !prevState)
  }

  const isActive = pathname === url

  return (
    <>
      {routes && routes.length > 0 ? (
        <>
          <div
            onClick={handleOpenRoutes}
            className={`
              ${
                url.split('/').filter((item) => item !== '').length > 1 &&
                'ml-4'
              } 
              ${
                isActive ? 'bg-borderPrimary-100' : 'hover:bg-borderPrimary-100'
              } px-2 py-2 flex items-center space-x-2 rounded-[6px] cursor-pointer justify-between`}
          >
            <div className="flex flex-row items-center">
              {icon}
              <div>
                <Text
                  fontVariant={FontVariant.Text}
                  text={name}
                  className={`${isActive ? 'font-medium' : 'font-normal'} ml-2`}
                />
              </div>
            </div>
            <div>
              {openRoutes ? (
                <ChevronUp
                  width={20}
                  height={20}
                  className="text-text-primary"
                />
              ) : (
                <ChevronDown
                  width={20}
                  height={20}
                  className="text-text-primary"
                />
              )}
            </div>
          </div>
          <div
            className={`${
              openRoutes
                ? 'slide-enter slide-enter-active flex flex-col gap-y-2'
                : 'slide-exit slide-exit-active flex flex-col gap-y-2'
            }`}
          >
            {routes.map((route) => (
              <SidebarItem key={route.id} {...route} parentUrl={url} />
            ))}
          </div>
        </>
      ) : (
        <Link
          to={url}
          className={`${
            isActive ? 'bg-borderPrimary-100' : 'hover:bg-borderPrimary-100'
          } ${
            url.split('/').filter((item) => item !== '').length > 1 && 'ml-4'
          } px-2 py-2 flex items-center space-x-2 rounded-[6px]`}
        >
          {icon}
          <div>
            <Text
              fontVariant={FontVariant.Text}
              text={name}
              className={`${isActive ? 'font-medium' : 'font-normal'}`}
            />
          </div>
        </Link>
      )}
    </>
  )
}
