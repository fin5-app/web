import React, { FC } from 'react'
import { Button } from '../../../../components/button'

const CreateCategoryModalContent: FC = () => {
  return (
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
        //TODO:fin5-57-integrar-modals-crear-y-editar-categoria-de-trans-con
      />
      <Button text={'Crear categoría'} variant="primary" />
    </div>
  )
}

export default CreateCategoryModalContent
