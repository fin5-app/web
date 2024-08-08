import React, { FC } from 'react'
import { Button } from '../../../../components/button'
import { Category } from '../../../../../domain/models/Category'

interface EditModalProps extends Category {}

const EditCategoryModalContent: FC<EditModalProps> = (props) => {
  return (
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
        // onChange={}
        // onBlur={}
        required
        minLength={6}
        //TODO:fin5-57-integrar-modals-crear-y-editar-categoria-de-trans-con
      />
      <Button text={'Guardar'} variant="primary" />
    </div>
  )
}

export default EditCategoryModalContent
