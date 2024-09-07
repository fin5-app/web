import { SearchBar } from './components/search-bar'
import { CategoriesTable } from './components/categories-table'
import { Button } from '../../../components/button'
import PlusIcon from '../../../../assets/plus.svg'
import { useTransactionCategoriesController } from './controller'
import CreateCategoryModalContent from './components/create-category-modal/create-category-modal-content'
import { ModalVariant } from '../../../constants/modal'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'

export const CategoriesPage = () => {
  const { handleOpenModal } = useTransactionCategoriesController()
  const searchParams = new URLSearchParams()
  const [_, setParams] = useSearchParams()

  useEffect(() => {
    searchParams.set('page', '1')
    searchParams.set('items', '7')
    setParams(searchParams.toString())
  }, [])

  return (
    <div className="max-w-100 flex flex-wrap">
      <div className="w-full">
        <div className="w-full flex flex-col gap-5">
          <div className="grid grid-cols-12 gap-3 items-center">
            <div className="col-span-12 md:col-span-9">
              <SearchBar placeholder={'Buscar categoría de transacción'} />
            </div>
            <div className="col-span-6 md:col-span-3">
              <Button
                text={'Crear categoría'}
                variant="primary"
                onClick={() =>
                  handleOpenModal(
                    <CreateCategoryModalContent />,
                    'Crear categoría',
                    ModalVariant.Small
                  )
                }
                leftIcon={
                  <PlusIcon className="text-white" width={20} height={20} />
                }
              />
            </div>
          </div>
          <CategoriesTable />
        </div>
      </div>
    </div>
  )
}
