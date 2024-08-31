import { FC, useContext } from 'react'
import { Button } from '../../../../components/button'
import { Category } from '../../../../../domain/models/Category'
import ModalContext from '../../../../providers/modal'

interface EditModalProps extends Category {}

const EditCategoryModalContent: FC<EditModalProps> = (props) => {
  const { closeModal } = useContext(ModalContext)
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="py-5 flex flex-col gap-2">
          <label className="text-normal text-text-primary text-sm">
            Nombre
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
            //TODO:fin5-57-integrar-modals-crear-y-editar-categoria-de-trans-con
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:justify-end">
        <div>
          <Button text={'Cancelar'} variant="secondary" onClick={closeModal} />
        </div>
        <div>
          <Button text={'Crear categoría'} variant="primary" />
        </div>
      </div>
    </div>
  )
}

export default EditCategoryModalContent
