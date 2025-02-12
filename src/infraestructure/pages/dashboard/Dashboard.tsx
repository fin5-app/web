import { FC } from 'react'
import { useDashboardController } from './controller'
import { CardsWrapper } from './components/cards-wrapper'
import LatestTransactions from './components/latest-transactions'
import { ToastVariant } from '../../constants/toast'
import { Toast } from '@components/toast/Toast'
import { WelcomeCard } from './components/welcome-card'

export const Dashboard: FC = () => {
  const { user, cash_flow, transactions } = useDashboardController()
  return (
    <div className="max-w-100 flex flex-wrap">
      <div className="w-full grid grid-cols-1 gap-10">
        <WelcomeCard user={user} balance={cash_flow?.balance.total_saving} />
        <CardsWrapper data={cash_flow?.balance} />
        <LatestTransactions transactions={transactions?.transactions} />
        <Toast message="Categoría creada" variant={ToastVariant.SUCCESS} />
      </div>
    </div>
  )
}
