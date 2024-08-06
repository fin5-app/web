import DashboardIcon from '../../../assets/layout-dashboard.svg'
import TransactionIcon from '../../../assets/arrow-right-left.svg'
import CategoriesIcon from '../../../assets/list.svg'
import PlusIcon from '../../../assets/plus.svg'

export const MAIN_MENU_ITEMS = [
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
    routes: [],
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
        id: '4',
        name: 'Crear transacción',
        url: '/transactions/create',
        icon: (
          <PlusIcon
            style={{ width: 20, height: 20 }}
            className="text-text-primary"
          />
        ),
      },
      {
        id: '5',
        name: 'Lista de transacciones',
        url: '/transactions',
        icon: (
          <CategoriesIcon
            style={{ width: 20, height: 20 }}
            className="text-text-primary"
          />
        ),
      },
      {
        id: '3',
        name: 'Categorías',
        url: '/transactions/categories',
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
