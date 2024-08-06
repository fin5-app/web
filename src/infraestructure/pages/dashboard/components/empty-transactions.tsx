import { FC } from 'react'
import EmptyIlustration from '../../../../assets/empty-ilustration.svg'

interface EmptyTransactionsProps {
  message?: string
}

export const EmptyTransactions: FC<EmptyTransactionsProps> = (props) => {
  const {
    message = 'No tienes ninguna transacción registrada en el último mes',
  } = props
  return (
    <div className="w-full flex items-center flex-col justify-center py-3">
      <div className="flex items-center flex-col justify-center h-full w-full">
        <div className=" ">
          <EmptyIlustration className="text-text-primary h-[10rem]" />
        </div>
        <div className="relative w-full -top-[1rem]">
          <div className="absolute top-0 w-full">
            <p className="text-sm font-light text-text-secondary text-center">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
