import { FC } from 'react'
import { useDashboardController } from './controller';
import { WelcomeCard } from './components/welcome-card';
import { CardsWrapper } from './components/cards-wrapper';
import LatestTransactions from './components/latest-transactions';

export const DashboardPage: FC = () => {
  const { user, cash_flow, transactions } = useDashboardController();
  return (
    <div className="max-w-100 flex flex-wra py-5">
      <div className="w-full grid grid-cols-1 gap-10">
        <WelcomeCard user={user} balance={cash_flow?.balance.total_saving} />
        <CardsWrapper data={cash_flow?.balance} />
        <LatestTransactions transactions={transactions?.transactions} />
      </div>
    </div>
  )
}
