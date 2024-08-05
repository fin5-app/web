import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SidebarItemProps } from './index'
import ChevronDown from '../../../assets/chevron-down.svg'
import ChevronUp from '../../../assets/chevron-up.svg'
import './animations.css'

export default function SidebarItem(props: SidebarItemProps) {
  const { name, url, icon, routes } = props
  const [openRoutes, setOpenRoutes] = useState<boolean>(false)
  const [isLeaving, setIsLeaving] = useState<boolean>(false)

  const { pathname } = useLocation()

  const handleOpenRoutes = () => {
    if (openRoutes) {
      setIsLeaving(true)
      setTimeout(() => {
        setOpenRoutes(false)
        setIsLeaving(false)
      }, 500)
    } else {
      setOpenRoutes(true)
    }
  }

  return (
    <>
      {routes && routes?.length > 0 ? (
        <>
          <div
            onClick={() => handleOpenRoutes()}
            className={`${
              pathname.includes(url)
                ? 'bg-borderPrimary-100'
                : 'hover:bg-borderPrimary-100'
            } px-2 py-2 flex items-center space-x-2 rounded-[6px] cursor-pointer justify-between`}
          >
            <div className="flex flex-row items-center">
              {icon}
              <div>
                <p
                  className={`${
                    pathname.includes(url) ? 'font-medium' : 'font-normal'
                  } text-text-primary text-[0.875rem] leading-[1.5715] -tracking-[0.006rem] ml-2 select-none  `}
                >
                  {name}
                </p>
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
          {(openRoutes || isLeaving) && (
            <div
              className={`transition-all duration-300 ease-in-out transform ${
                openRoutes && !isLeaving ? 'fade-enter fade-enter-active' : ''
              }
              ${isLeaving ? 'fade-leave fade-leave-active' : ''}
              `}
            >
              {routes.map((route) => {
                return (
                  <Link
                    to={`${route.url}`}
                    key={route.id}
                    className={`${
                      pathname === route.url
                        ? 'bg-borderPrimary-100'
                        : 'hover:bg-borderPrimary-100'
                    } px-2 py-2 flex items-center space-x-2 rounded-[6px] ml-5`}
                  >
                    {route.icon}
                    <div>
                      <p
                        className={`${
                          pathname === route.url ? 'font-medium' : 'font-normal'
                        } text-text-primary text-[0.875rem] leading-[1.5715] -tracking-[0.006rem] select-none  `}
                      >
                        {route.name}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <Link
          to={url}
          className={`${
            pathname === url
              ? 'bg-borderPrimary-100'
              : 'hover:bg-borderPrimary-100'
          } px-2 py-2 flex items-center space-x-2 rounded-[6px]`}
        >
          {icon}
          <div>
            <p
              className={`${
                pathname === url ? 'font-medium' : 'font-normal'
              } text-text-primary text-[0.875rem] leading-[1.5715] -tracking-[0.006rem] select-none `}
            >
              {name}
            </p>
          </div>
        </Link>
      )}
    </>
  )
}
