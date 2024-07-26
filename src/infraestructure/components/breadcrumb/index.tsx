import { SidebarItemProps } from '../sidebar';
import DashboardIcon from '../../../assets/layout-dashboard.svg'
import TransactionIcon from '../../../assets/arrow-right-left.svg'
// import WalletMinimal from '../../../assets/wallet-minimal.svg'

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SidebarItems: SidebarItemProps[] = [
    {
        id: '1',
        name: 'Dashboard',
        url: '/dashboard',
        icon: <DashboardIcon style={{ width: 30, height: 30 }} className='text-text-primary' />
    },
    {
        id: '2',
        name: 'Transacciones',
        url: '/transactions',
        icon: <TransactionIcon style={{ width: 30, height: 30 }} className='text-text-primary' />,
    },
    // {
    //     id: '3',
    //     name: 'Facturación',
    //     url: '/billing',
    //     icon: <WalletMinimal style={{ width: 30, height: 30 }} className='text-text-primary' />
    // }
]
function findSidebarItemWithPathname(pathname: string) {
    const foundedItem = SidebarItems.find(item => item.url === pathname)
    if (!foundedItem) {
        return null;
    }
    return { pathname: foundedItem.name, icon: foundedItem.icon }
}

export default function Breadcrumb() {
    const { pathname } = useLocation();
    const [currentBreadcrumb, setCurrentBreadcrumb] = useState<{ pathname: string, icon: JSX.Element }>();

    useEffect(() => {
        const response = findSidebarItemWithPathname(pathname);
        if (response) {
            setCurrentBreadcrumb(response);
        }
    }, [pathname])
    return (
        <div className='flex items-center space-x-4 py-4'>
            {currentBreadcrumb?.icon}
            <p className='text-text-primary capitalize text-2xl'>{currentBreadcrumb?.pathname}</p>
        </div>
    )
}
