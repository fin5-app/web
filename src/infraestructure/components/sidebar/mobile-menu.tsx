import { useContext, useRef } from 'react'
import MenuIcon from '../../../assets/menu.svg'
import SidebarContext from '../../providers/sidebar'
import SidebarItem from './sidebar-item'
import { SidebarItemProps } from '../../constants/menu-items'
import { useAuthStore } from '../../zustand/auth/useAuthStore'
import { useNavigate } from 'react-router-dom'
import Logout from '../../../assets/log-out.svg'

interface MobileMenuProps {
  sidebarItems: SidebarItemProps[]
}

const LOGOUT = 'Cerrar Sesión'

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
  const { logout } = useAuthStore()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="visible lg:hidden">
      <button onClick={handleClickOpenSidebar}>
        <MenuIcon style={{ color: 'white' }} className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="w-screen h-screen bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-20 overflow-hidden">
          <div
            ref={menuRef}
            className={`animate-slideIn h-full w-[60%] bg-secondary-100 right-0 absolute p-4  max-h-screen`}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="flex flex-col space-y-4">
                {renderSidebarItems(sidebarItems).map((item) => (
                  <SidebarItem key={item.id} {...item} />
                ))}
              </div>
              <button
                onClick={handleLogout}
                className="flex space-x-2 items-center px-2 py-2"
              >
                <Logout className="w-5 h-5 text-text-primary" />
                <p className="font-normal text-text-primary text-sm">
                  {LOGOUT}
                </p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
