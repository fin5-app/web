import { FC } from "react"
import { User } from "../../../../domain/models/User";
import { formatCurrency } from "../../../utils/currency";

interface WelcomeCardProps {
    balance?: number;
    user?: User;
}

export const WelcomeCard: FC<WelcomeCardProps> = (props) => {
    const { user, balance } = props;
    return (
        <div className='bg-secondary-100 py-3 px-5 rounded-[6px] flex items-center border-[1px] border-borderPrimary-100'>
            <div className="flex flex-col gap-3">
                <p className='text-purple-100 text-xl'>Hola, {user?.first_name}!</p>
                <div className="flex items-center space-x-3">
                    <p className='text-text-primary font-semibold text-4xl'>{formatCurrency(balance ?? 0, 'USD')}</p>
                </div>
            </div>
        </div>
    )
}