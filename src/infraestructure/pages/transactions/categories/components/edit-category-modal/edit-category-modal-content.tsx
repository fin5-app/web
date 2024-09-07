import { FC } from 'react'
import { useController } from './controller'
import { Button } from '../../../../../components/button/index'
import { Category } from '../../../../../../domain/models/Category'
import { Text } from '../../../../../components/text'
import { FontVariant } from '../../../../../constants/fonts'
import InfoIcon from '../../../../../../assets/info.svg'

interface EditModalProps extends Category {}

const BannerText =
  'Todas las transacciones asociadas a esta categoria, se veran afectadas por la actualización efectuada'

const EditCategoryModalContent: FC<EditModalProps> = (props) => {
  const { closeModal, handleChange, handleBlur, values, handleSubmit } =
    useController(props)
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
          <Button text={'Guardar'} variant="primary" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default EditCategoryModalContent
