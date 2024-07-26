import { Link } from 'react-router-dom';
import Fin5 from '../../../assets/fin5.svg'

interface NavbarItemProps {
    id: string;
    name: string;
    href: string;
    variant: 'button' | 'link';
}

const NAVBAR_ITEMS: NavbarItemProps[] = [
    {
        id: "1",
        name: "Regístrate",
        variant: "button",
        href: "/register"
    },
    {
        id: "2",
        name: "Iniciar Sesión",
        variant: "link",
        href: "/login"
    },
]

export default function Navbar() {
    return (
        <div className='flex w-full h-16 bg-secondary-100 border-b-[1px] border-borderPrimary-100 px-5'>
            <Link to={'/'} className='flex items-center justify-center h-full space-x-1'>
                <p className='text-2xl font-bold text-white'>Fin</p>
                <Fin5 className='w-6 h-6' />
            </Link>
            <div className='sm:flex sm:flex-1 sm:justify-end sm:space-x-4 sm:items-center hidden'>
                {
                    NAVBAR_ITEMS.map((item) => (
                        <NavbarItem key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    )
}


function NavbarItem(props: NavbarItemProps) {
    const { href, name, variant } = props;
    if (variant === 'button') {
        return (
            <Link to={href} className='py-2 px-3 text-primary-100 bg-text-primary rounded-[6px] font-medium text-sm'>
                <p>{name}</p>
            </Link>
        )
    }

    return (
        <Link to={href} className='py-2 px-3 text-text-primary rounded-[6px] font-medium text-sm'>
            <p>{name}</p>
        </Link>
    )
}