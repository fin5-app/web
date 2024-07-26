import { Link } from 'react-router-dom'
import { FC } from 'react'

export const LoginFooter: FC = () => {
  return (
    <div className='grid grid-cols-3 p-4 w-[220px] my-5'>
      <Link to={'#!'} className='text-xs text-text-secondary'>
        <p className='text-center'>
          Terms
        </p>
      </Link>
      <Link to={'#!'} className='text-xs text-text-secondary'>
        <p className='text-center'>
          FAQ
        </p>
      </Link>
      <Link to={'#!'} className='text-xs text-text-secondary'>
        <p className='text-center'>
          Privacy
        </p>
      </Link>
    </div>
  )
}
