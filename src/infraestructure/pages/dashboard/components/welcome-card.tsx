import { FC } from 'react'
import { User } from '../../../../domain/models/User'
import { formatCurrency } from '../../../utils/currency'
import { Text } from '../../../components/text'
import { FontVariant } from '../../../constants/fonts'

interface WelcomeCardProps {
  balance?: number
  user?: User
}

export const WelcomeCard: FC<WelcomeCardProps> = (props) => {
  const { user, balance } = props
  return (
    <div className="bg-secondary-100 py-3 px-5 rounded-[6px] flex items-center border-[1px] border-borderPrimary-100">
      <div className="flex flex-col gap-3">
        <Text
          fontVariant={FontVariant.Subtitle1}
          text={`Hola, ${user?.first_name}!`}
          textColor={'text-purple-100'}
        />
        <div className="flex items-center space-x-3">
          <Text
            fontVariant={FontVariant.Title}
            text={formatCurrency(balance ?? 0, 'USD')}
          />
        </div>
      </div>
    </div>
  )
}
