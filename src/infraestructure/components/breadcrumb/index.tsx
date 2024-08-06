import { SidebarItemProps } from '../sidebar'
import ChevronUpIcon from '../../../assets/chevron-up.svg'

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MAIN_MENU_ITEMS } from '../../constants/menu-items/index'

function findMenuItemByPathname(
  actuallyPathname: string
): { breadcrumb: string[]; menuItem: SidebarItemProps | null } | null {
  let matchedMenuItem: SidebarItemProps | null = null
  let parentPathnames: string[] = []

  function getMenuItem() {
    for (const item of MAIN_MENU_ITEMS) {
      if (item.url === actuallyPathname) {
        matchedMenuItem = item
      } else if (item.routes && item.routes.length > 0) {
        for (const recursiveItem of item.routes) {
          parentPathnames.push(item.name)
          if (recursiveItem.url === actuallyPathname) {
            matchedMenuItem = recursiveItem
            parentPathnames.push(recursiveItem.name)
            break
          }
          parentPathnames = []
        }
      }
    }
    return matchedMenuItem
  }
  const res = getMenuItem()

  if (!res) {
    return null
  }
  return { breadcrumb: parentPathnames, menuItem: matchedMenuItem }
}
function findSidebarItemWithPathname(pathname: string) {
  const result = findMenuItemByPathname(pathname)

  return result
}

export default function Breadcrumb() {
  const { pathname } = useLocation()

  const [currentBreadcrumb, setCurrentBreadcrumb] = useState<{
    breadcrumb: string[]
    menuItem: SidebarItemProps | null
  }>()

  useEffect(() => {
    const response = findSidebarItemWithPathname(pathname)
    if (response) {
      setCurrentBreadcrumb(response)
    }
  }, [pathname])
  return (
    <div className="flex items-center space-x-4 py-4">
      {/* {currentBreadcrumb?.menuItem?.icon} */}
      <div className="flex items-center">
        {currentBreadcrumb && currentBreadcrumb.breadcrumb.length > 0 ? (
          currentBreadcrumb?.breadcrumb.map((item, index) => {
            if (index === currentBreadcrumb.breadcrumb.length - 1) {
              return (
                <div key={item} className="flex flex-row items-center">
                  <ChevronUpIcon className="h-5 w-5 rotate-90 text-text-secondary" />
                  <p className="text-text-primary capitalize text-2xl">
                    {item}
                  </p>
                </div>
              )
            } else {
              return (
                <p className="text-text-primary capitalize text-2xl" key={item}>
                  {item}
                </p>
              )
            }
          })
        ) : (
          <p className="text-text-primary capitalize text-2xl">
            {currentBreadcrumb?.menuItem?.name}
          </p>
        )}
      </div>
    </div>
  )
}
