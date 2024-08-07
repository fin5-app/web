import DashboardIcon from '../../../assets/layout-dashboard.svg'
import TransactionIcon from '../../../assets/arrow-right-left.svg'

export const MAIN_MENU_ITEMS = [
  {
    id: '1',
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
    url: '/transactions',
    icon: (
      <TransactionIcon
        style={{ width: 20, height: 20 }}
        className="text-text-primary"
      />
    ),
  },
]
