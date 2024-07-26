
import { Link, useLocation } from "react-router-dom";
import { SidebarItemProps } from "./index";

export default function SidebarItem(props: SidebarItemProps) {
    const { name, url, icon } = props;
    const { pathname } = useLocation();
    return (
        <Link to={url} className={`${pathname === url ? 'bg-borderPrimary-100' : 'hover:bg-borderPrimary-100'} px-2 py-2 flex items-center space-x-2  rounded-[6px]`}>
            {icon}
            <div>
                <p className={`${pathname === url ? 'font-medium' : 'font-normal'} text-text-primary text-[0.875rem] leading-[1.5715] -tracking-[0.006rem] `}>
                    {name}
                </p>
            </div>
        </Link>
    )
}