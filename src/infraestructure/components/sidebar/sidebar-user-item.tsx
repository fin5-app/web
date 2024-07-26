import { useNavigate } from 'react-router-dom';
import Logout from '../../../assets/log-out.svg';
import { useAuthStore } from '../../zustand/auth/useAuthStore';

export const SidebarUserItem = () => {
    const { user, logout } = useAuthStore();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate('/login')
    }
    return (
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
                <div className='w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center'>
                    <p className='text-purple-300 font-black'>
                        {user?.first_name.charAt(0)}
                    </p>
                </div>
                <div className='flex flex-col'>
                    <p className='font-normal text-text-primary text-sm'>
                        {user?.first_name + ' ' + user?.last_name}
                    </p>
                    <p className='font-normal text-text-primary text-xs'>
                        {user?.email}
                    </p>
                </div>
            </div>
            <button onClick={handleLogout}>
                <Logout className='w-5 h-5 text-text-primary' />
            </button>
        </div>

    )
}
