import { SearchBar } from './components/search-bar'
import { CategoriesTable } from './components/categories-table'
import { Button } from '../../../components/button'
import PlusIcon from '../../../../assets/plus.svg'
import { useModal } from '../../../providers/modal'

export const CategoriesPage = () => {
  const { showModal } = useModal()
  const handleCreateCategory = () => {
    //TODO:fin5-57-integrar-modals-crear-y-editar-categoria-de-trans-con
    showModal(
      <div className="space-y-3">
        <label className="text-normal text-text-primary text-sm">
          Nombre de categoría nueva
        </label>
        <input
          className="peer block w-full rounded-md border border-borderPrimary-100 py-2 px-3 text-sm outline-2 bg-primary-100 text-white"
          id="email"
          type="text"
          name="email"
          // value={values.email}
          // onChange={handleChange('email')}
          // onBlur={handleBlur('email')}
          required
          minLength={6}
        />
        <Button text={'Crear categoría'} variant="primary" />
      </div>
    )
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
