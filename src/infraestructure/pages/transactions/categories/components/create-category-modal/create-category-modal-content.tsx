import { FC } from 'react'
import { Button } from '../../../../../components/button'
import { Text } from '../../../../../components/text'
import { FontVariant } from '../../../../../constants/fonts'
import InfoIcon from '../../../../../../assets/info.svg'
import { useController } from './controller'

const BannerText =
  'Las categorias funcionan tanto para los ingresos como los gastos'

const CreateCategoryModalContent: FC = () => {
  const { handleBlur, handleChange, handleSubmit, values, closeModal } =
    useController()
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <div className="py-1 flex flex-col gap-2">
          <label className="text-normal text-text-primary text-sm">
            Nombre
          </label>
          <input
            className="peer block w-full rounded-md border border-borderPrimary-100 py-2 px-3 text-sm outline-2 bg-primary-100 text-white"
            id="name"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange('name')}
            onBlur={handleBlur('name')}
            minLength={6}
          />
        </div>
        <div className="py-3 w-full bg-borderPrimary-100 rounded-md flex justify-between pr-4 items-center">
          <Text
            fontVariant={FontVariant.Text}
            text={BannerText}
            textColor={'text-text-primary'}
            className="px-4"
          />
          <div>
            <InfoIcon className="text-text-primary w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:justify-end">
        <div>
          <Button text={'Cancelar'} variant="secondary" onClick={closeModal} />
        </div>
        <div>
          <Button
            text={'Crear categoría'}
            variant="primary"
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateCategoryModalContent
