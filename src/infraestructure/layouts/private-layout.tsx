import { FC } from 'react'
import { Sidebar } from '@components/sidebar/Sidebar'
import Breadcrumb from '@components/breadcrumb/Breadcrumb'

interface PrivateLayoutProps {
  children: JSX.Element | JSX.Element[]
}

export const PrivateLayout: FC<PrivateLayoutProps> = (props) => {
  const { children } = props
  return (
    <div className="flex flex-col lg:flex-row h-screen w-full">
      <Sidebar />
      <div className="bg-primary-100 w-full flex justify-center py-5 lg:overflow-auto">
        <div className="w-full lg:w-3/5 px-3 lg:px-0 ">
          <Breadcrumb />
          {children}
        </div>
      </div>
    </div>
  )
}
