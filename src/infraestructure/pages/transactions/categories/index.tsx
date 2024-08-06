import { SearchBar } from './components/search-bar'
import { CategoriesTable } from './components/categories-table'
import { Button } from '../../../components/button'
import PlusIcon from '../../../../assets/plus.svg'

export const CategoriesPage = () => {
  const handleCreateCategory = () => {
    //TODO: fin5-49-crear-componente-modal (Create Category)
  }
  return (
    <div className="max-w-100 flex flex-wrap">
      <div className="w-full">
        <div className="w-full flex flex-col gap-5">
          <div className="grid grid-cols-12 space-x-3">
            <div className="col-span-3">
              <Button
                text={'Crear categoría'}
                variant="primary"
                onClick={handleCreateCategory}
                leftIcon={
                  <PlusIcon className="text-white" width={20} height={20} />
                }
              />
            </div>
          </div>
          <SearchBar placeholder={'Buscar categoría de transacción'} />
          <CategoriesTable />
        </div>
      </div>
    </div>
  )
}
