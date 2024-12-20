import { useContext } from 'react';
import MenuIcon from '../../../assets/menu.svg';
import SidebarContext from '../../providers/sidebar';
import { SidebarItemProps } from './index';
import SidebarItem from './sidebar-item';

interface MobileMenuProps {
    sidebarItems: SidebarItemProps[]
}

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
    const { sidebarItems } = props;
    const { isOpen, openSidebar } = useContext(SidebarContext);

    const handleClickOpenSidebar = () => {
        openSidebar();
    }

    return (
        <div className='visible md:hidden'>
            <button onClick={handleClickOpenSidebar}>
                <MenuIcon style={{ color: 'white' }} className='w-5 h-5' />
            </button>
            {
                isOpen &&
                <div className='w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-20'>
                    <div className={`animate-slideIn h-full w-[60%] bg-secondary-100 right-0 absolute p-4 space-y-4`}>
                        {
                            sidebarItems.map(item => <SidebarItem key={item.id} {...item} />)
                        }
                    </div>
                </div>
            }
        </div >
    )
}