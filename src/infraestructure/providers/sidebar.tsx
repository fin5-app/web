
import { useLocation } from "react-router-dom";
import { createContext, useEffect, useState } from "react"

interface SidebarContextValues {
    isOpen: boolean;
    openSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextValues>({
    isOpen: false,
    openSidebar: () => { },
});

function SidebarProvider({ children }: { children: JSX.Element }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { pathname } = useLocation();

    function openSidebar() {
        setIsOpen(true);
    }

    useEffect(() => {
        setIsOpen(false);
    }, [pathname])

    return (
        <SidebarContext.Provider value={{ isOpen, openSidebar }}>
            {children}
        </SidebarContext.Provider>
    )
}
export default SidebarContext
export { SidebarProvider } 
