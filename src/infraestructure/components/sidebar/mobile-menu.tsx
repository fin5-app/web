import { useContext, useRef } from 'react'
import MenuIcon from '../../../assets/menu.svg'
import SidebarContext from '../../providers/sidebar'
import SidebarItem from './sidebar-item'
import { SidebarItemProps } from '../../constants/menu-items'

interface MobileMenuProps {
  sidebarItems: SidebarItemProps[]
}

const renderSidebarItems = (
  items: SidebarItemProps[],
  parentUrl?: string
): SidebarItemProps[] => {
  return items.map((item) => ({
    ...item,
    url: parentUrl ? `${parentUrl}${item.url}` : item.url,
    routes: item.routes
      ? renderSidebarItems(
          item.routes,
          parentUrl ? `${parentUrl}${item.url}` : item.url
        )
      : [],
  }))
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const { sidebarItems } = props
  const { isOpen, openSidebar, closeSidebar } = useContext(SidebarContext)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleClickOpenSidebar = () => {
    if (!isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      openSidebar()
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
      closeSidebar()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      document.removeEventListener('mousedown', handleClickOutside)
      closeSidebar()
    }
  }

  return (
    <div className="visible lg:hidden">
      <button onClick={handleClickOpenSidebar}>
        <MenuIcon style={{ color: 'white' }} className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-20">
          <div
            ref={menuRef}
            className={`animate-slideIn h-full w-[60%] bg-secondary-100 right-0 absolute p-4 space-y-4`}
          >
            {renderSidebarItems(sidebarItems).map((item) => (
              <SidebarItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
