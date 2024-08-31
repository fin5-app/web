import ClockIcon from '../../../../assets/clock.svg'
import BanknotesIcon from '../../../../assets/banknote.svg'
import InboxIcon from '../../../../assets/inbox.svg'
import { formatCurrency } from '../../../utils/currency'
import { Text } from '../../../components/text'
import { FontVariant } from '../../../constants/fonts'

interface CardBalanceProps {
  title: string
  amount?: number
  type: 'incomes' | 'expenses' | 'savings'
}

interface CardsWrapperProps {
  data?: {
    total_expenses: number
    total_incomes: number
    total_saving: number
  }
}

const iconMap = {
  savings: { icon: ClockIcon, color: 'text-primaryBlue-100' },
  incomes: { icon: BanknotesIcon, color: 'text-success-100' },
  expenses: { icon: InboxIcon, color: 'text-error-100' },
}

export const CardsWrapper = (props: CardsWrapperProps) => {
  const { data } = props
  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-5">
      <CardBalance
        title="Ingresos"
        amount={data?.total_incomes}
        type="incomes"
      />
      <CardBalance
        title="Gastos"
        amount={data?.total_expenses}
        type="expenses"
      />
      <CardBalance
        title="Porcentaje de Ahorro"
        amount={((data?.total_saving ?? 0) * 100) / (data?.total_incomes ?? 0)}
        type="savings"
      />
    </div>
  )
}

function CardBalance(props: CardBalanceProps) {
  const { title, amount, type } = props
  const Icon = iconMap[type].icon
  const TextColor = iconMap[type].color
  return (
    <div className="bg-secondary-100 py-3 px-5 rounded-[6px] flex items-center border-[1px] border-borderPrimary-100 space-x-4">
      <div>{Icon ? <Icon className="h-10 w-10 text-purple-100" /> : null}</div>
      <div>
        <Text text={title} fontVariant={FontVariant.Subtitle2} />
        {type === 'savings' ? (
          <Text
            fontVariant={FontVariant.Subtitle2}
            text={`%${Math.ceil(amount ?? 0)}`}
            textColor={TextColor}
          />
        ) : (
          <Text
            fontVariant={FontVariant.Subtitle2}
            text={formatCurrency(amount ?? 0, 'ARS')}
            textColor={TextColor}
          />
        )}
      </div>
    </div>
  )
}
