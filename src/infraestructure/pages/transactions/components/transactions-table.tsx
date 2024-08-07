import { TableFooter } from './transactions-table-footer'
import { FC } from 'react'
import { formatCurrency } from '../../../utils/currency'
import { Transaction } from '../../../../domain/models/Transaction'
import { useGetTransactions } from '../../../hooks/transactions/useGetTransactions'
import { TransactionTypes } from '../../../../domain/models/TransactionType'
import { useSearchParams } from 'react-router-dom'
import { EmptyTransactions } from '../../dashboard/components/empty-transactions'

interface TableRowProps extends Transaction {}

export const TransactionsTable: FC = () => {
  const [params] = useSearchParams()
  const { data: transactions } = useGetTransactions(
    Number(params.get('page')),
    Number(params.get('items')),
    params.get('q') ?? undefined
  )
  return (
    <div className="w-full bg-secondary-100 border-[1px] border-borderPrimary-100 min-h-[%50] rounded-[6px]">
      <TableHead />
      <div
        className={`min-h-[15rem]  ${
          transactions &&
          transactions.transactions.length === 0 &&
          'items-center flex justify-center'
        }`}
      >
        {transactions && transactions.transactions.length > 0 ? (
          transactions?.transactions.map((t) => <TableRow {...t} key={t.id} />)
        ) : (
          <EmptyTransactions
            message={'No tienes ninguna transacción registrada'}
          />
        )}
      </div>
      <TableFooter
        total_pages={transactions?.total_pages}
        current_page={Number(params.get('page'))}
      />
    </div>
  )
}

const TableHead: FC = () => {
  return (
    <div className="grid grid-cols-6 px-3 py-4 border-b-[1px] border-borderPrimary-100">
      <div className="col-span-2">
        <p className="text-text-secondary text-xs font-normal">Categoría</p>
      </div>
      <div>
        <p className="text-text-secondary text-xs font-normal">Fecha</p>
      </div>
      <div>
        <p className="text-text-secondary text-xs font-normal">Tipo</p>
      </div>
      <div>
        <p className="text-text-secondary text-xs font-normal">Monto</p>
      </div>
      <div>
        <p className="text-text-secondary text-xs font-normal">Moneda</p>
      </div>
    </div>
  )
}

const TableRow: FC<TableRowProps> = (props) => {
  return (
    <div className="grid grid-cols-6 px-3 py-4 border-b-[1px] border-borderPrimary-100 items-center hover:cursor-pointer">
      <div className="col-span-2">
        <p className="text-text-primary text-sm font-light">
          {props.category.name}
        </p>
      </div>
      <div>
        <p className="text-text-primary text-sm font-light">
          {new Date(props.created).toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </p>
      </div>
      <div>
        <p
          className={`uppercase w-fit text-secondary-100 px-2  text-[0.65rem] font-bold rounded-full ${
            props.type.name === TransactionTypes.EXPENSE
              ? 'bg-error-100'
              : 'bg-success-100'
          }`}
        >
          {props.type.name === TransactionTypes.EXPENSE ? 'Gasto' : 'Ingreso'}
        </p>
      </div>
      <div>
        <p className="text-text-primary text-sm font-light">
          {formatCurrency(props.amount, 'USD')}
        </p>
      </div>
      <div>
        <p className="text-text-primary text-sm font-light">
          {props.currency.code}
        </p>
      </div>
    </div>
  )
}
