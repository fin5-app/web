import { FC } from "react"
import { Sidebar } from "../components/sidebar";
import Breadcrumb from "../components/breadcrumb";

interface PrivateLayoutProps {
    children: JSX.Element | JSX.Element[];
}

export const PrivateLayout: FC<PrivateLayoutProps> = (props) => {
    const { children } = props;
    return (
        <div className='flex flex-col lg:flex-row h-screen w-full'>
            <Sidebar />
            <div className='bg-primary-100 w-full h-full flex justify-center overflow-auto'>
                <div className='w-full lg:w-3/5 pt-5 px-3 lg:px-0 '>
                    <Breadcrumb />
                    {children}
                </div>
            </div>
        </div>
    )
}
