import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetTransactionsCategories } from '../../../../hooks/transactions/useGetTransactionsCategories'
import { Category } from '../../../../../domain/models/Category'
import EditIcon from '../../../../../assets/pencil.svg'
import { useModal } from '../../../../providers/modal'
import { Button } from '../../../../components/button'
import { TableFooter } from '../../../../components/table-footer'
import { EmptyTransactions } from '../../../dashboard/components/empty-transactions'

interface TableRowProps extends Category {}

export const CategoriesTable: FC = () => {
  const [params] = useSearchParams()
  const { data: transactionCategories } = useGetTransactionsCategories(
    Number(params.get('page')),
    Number(params.get('items')),
    params.get('q') ?? undefined
  )

  return (
    <div className="w-full bg-secondary-100 border-[1px] border-borderPrimary-100 min-h-[%50] rounded-[6px]">
      <TableHead />
      {transactionCategories && transactionCategories.data.length > 0 ? (
        transactionCategories?.data.map((t) => <TableRow {...t} key={t.id} />)
      ) : (
        <EmptyTransactions
          message={'No tienes ninguna categoría creada para las transacciones'}
        />
      )}
      <TableFooter total_pages={1} current_page={Number(params.get('page'))} />
    </div>
  )
}

const TableHead: FC = () => {
  return (
    <div className="grid grid-cols-6 px-3 py-4 border-b-[1px] border-borderPrimary-100">
      <div className="col-span-3">
        <p className="text-text-secondary text-xs font-normal">
          Nombre de la categoría
        </p>
      </div>
      <div>
        <p className="text-text-secondary text-xs font-normal">Fecha</p>
      </div>
      <div>
        <p className="text-text-secondary text-xs font-normal">Acciones</p>
      </div>
    </div>
  )
}

const TableRow: FC<TableRowProps> = (props) => {
  const { showModal } = useModal()

  return (
    <div className="grid grid-cols-6 px-3 py-4 border-b-[1px] border-borderPrimary-100 items-center hover:cursor-pointer">
      <div className="col-span-3">
        <p className="text-text-primary text-sm font-light">{props.name}</p>
      </div>
      <div>
        <p className="text-text-primary text-sm font-light">
          {/* {new Date(props.created).toLocaleDateString('es-AR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })} */}
          fecha
        </p>
      </div>
      <div>
        <div className="text-text-primary text-sm font-light">
          <EditIcon
            width={15}
            height={15}
            onClick={() =>
              //TODO:fin5-57-integrar-modals-crear-y-editar-categoria-de-trans-con
              showModal(
                <div className="space-y-3">
                  <label className="text-normal text-sm text-text-primary">
                    Editar categoría
                  </label>
                  <input
                    className="peer block w-full rounded-md border border-borderPrimary-100 py-2 px-3 text-sm outline-2 bg-primary-100 text-white"
                    id="email"
                    type="text"
                    name="email"
                    value={props.name}
                    // onChange={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    required
                    minLength={6}
                  />
                  <Button text={'Guardar'} variant="primary" />
                </div>
              )
            }
          />
        </div>
      </div>
    </div>
  )
}
