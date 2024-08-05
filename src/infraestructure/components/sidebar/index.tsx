import Fin5 from '../../../assets/fin5.png'
import SidebarItem from './sidebar-item'
import { MobileMenu } from './mobile-menu'
import { FC } from 'react'
import { SidebarDollarBlue } from './sidebar-dollar-blue'
import { SidebarUserItem } from './sidebar-user-item'
import { MAIN_MENU_ITEMS } from '../../constants/menu-items/index'

export interface SidebarItemProps {
  id: string
  name: string
  url: string
  icon: JSX.Element
  routes?: SidebarItemProps[]
}

export const Sidebar: FC = () => {
  return (
    <div className="lg:h-full w-full lg:w-72 bg-secondary-100 border-[1px] border-borderPrimary-100 flex flex-col ">
      <div className="flex-1 flex flex-col space-y-2">
        <div className="flex items-center py-4 px-5 justify-between md:justify-normal">
          <div className="flex items-center space-x-1">
            <div>
              <p className="text-white text-3xl font-bold">Fin</p>
            </div>
            <div>
              <img src={Fin5} style={{ width: 32, height: 32 }} alt={'fin5'} />
            </div>
          </div>
          <MobileMenu sidebarItems={MAIN_MENU_ITEMS} />
        </div>
        <div className={`hidden lg:flex lg:flex-col px-3 space-y-2`}>
          {MAIN_MENU_ITEMS.map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center space-y-3">
        <div className="hidden md:grid md:grid-cols-1 px-3">
          <SidebarDollarBlue />
        </div>
        <div className="hidden md:flex border-t-[1px] border-borderPrimary-100 flex-col justify-center px-2 py-3">
          <SidebarUserItem />
        </div>
      </div>
    </div>
  )
}
