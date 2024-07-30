import { Route, Routes, Navigate } from 'react-router-dom'
import { FC } from 'react'
import { DashboardPage } from '../../pages/dashboard'
import { TransactionsPage } from '../../pages/transactions'
import { PrivateLayout } from '../../layouts/private-layout'
import { SidebarProvider } from '../../providers/sidebar'

export const PrivateRouter: FC = () => {
    return (
        <SidebarProvider>
            <PrivateLayout>
                <Routes>
                    <Route path='/dashboard' element={<DashboardPage />} />
                    <Route path='/transactions' element={<TransactionsPage />} />
                    <Route path='/*' element={<Navigate to="/dashboard" />} />
                </Routes>
            </PrivateLayout>
        </SidebarProvider>
    )
}