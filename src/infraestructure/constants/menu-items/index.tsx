import DashboardIcon from '../../../assets/layout-dashboard.svg'
import TransactionIcon from '../../../assets/arrow-right-left.svg'
import CategoriesIcon from '../../../assets/list.svg'
import WalletIcon from '../../../assets/wallet-minimal.svg'
export interface SidebarItemProps {
  id: string
  name: string
  url: string
  icon: JSX.Element
  routes?: SidebarItemProps[]
  parentUrl?: string
}
interface MenuItem extends SidebarItemProps {}

export const MAIN_MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Dashboard',
    url: '/dashboard',
    icon: (
      <DashboardIcon
        style={{ width: 20, height: 20 }}
        className="text-text-primary"
      />
    ),
  },
  {
    id: '2',
    name: 'Transacciones',
    url: '/transactions',
    icon: (
      <TransactionIcon
        style={{ width: 20, height: 20 }}
        className="text-text-primary"
      />
    ),
    routes: [
      {
        id: '3',
        name: 'Histórico',
        url: '/history',
        parentUrl: '/transactions',
        icon: (
          <WalletIcon
            style={{ width: 20, height: 20 }}
            className="text-text-primary"
          />
        ),
      },
      {
        id: '4',
        name: 'Categorías',
        url: '/categories',
        parentUrl: '/transactions',
        icon: (
          <CategoriesIcon
            style={{ width: 20, height: 20 }}
            className="text-text-primary"
          />
        ),
      },
    ],
  },
]

export const splitPathname = (pathname: string): string[] => {
  return pathname
    .split('/')
    .filter((item) => item !== '')
    .map((item) => `/${item}`)
}

export const getMenuItemByPathname = (
  MENU_ITEMS: MenuItem[],
  pathname: string
): MenuItem | null => {
  let matched_item: MenuItem | null = null
  for (const item of MENU_ITEMS) {
    if (item.url === pathname) {
      matched_item = item
      break
    }
    if (item.routes) {
      return getMenuItemByPathname(item.routes, pathname)
    }
  }
  return matched_item
}

export const makeBreadcrumb = (
  MENU_ITEMS: MenuItem[],
  pathname: string
): string[] => {
  const splited_pathname = splitPathname(pathname)
  const breadcrumb: string[] = []
  for (const path of splited_pathname) {
    const menu_item_matched_path = getMenuItemByPathname(MENU_ITEMS, path)
    if (menu_item_matched_path) {
      breadcrumb.push(menu_item_matched_path.name)
    }
  }
  return breadcrumb
}
