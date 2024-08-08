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
          <div className="grid grid-cols-12 space-x-3 items-center">
            <div className="col-span-9">
              <SearchBar placeholder={'Buscar categoría de transacción'} />
            </div>
            <div className="col-span-3">
              <Button
                text={'Crear categoría'}
                variant="primary"
                onClick={handleCreateCategory}
                leftIcon={<PlusIcon className="w-4 h-4" />}
              />
            </div>
          </div>
          <CategoriesTable />
        </div>
      </div>
    </div>
  )
}
