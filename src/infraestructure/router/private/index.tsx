import { Route, Routes, Navigate } from 'react-router-dom'
import { FC } from 'react'
import { PrivateLayout } from '../../layouts/private-layout'
import { SidebarProvider } from '../../providers/sidebar'
import { ModalProvider } from '../../providers/modal'
import { Dashboard } from '@pages/dashboard/Dashboard'
import { Transactions } from '@pages/transactions/history/History'
import { Categories } from '@pages/transactions/categories/Categories'

export const PrivateRouter: FC = () => {
  return (
    <ModalProvider>
      <SidebarProvider>
        <PrivateLayout>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions">
              <Route path="history" element={<Transactions />} />
              <Route path="categories" element={<Categories />} />
            </Route>
            <Route path="/*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </PrivateLayout>
      </SidebarProvider>
    </ModalProvider>
  )
}
