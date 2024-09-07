import { Route, Routes, Navigate } from 'react-router-dom'
import { FC } from 'react'
import { DashboardPage } from '../../pages/dashboard'
import { TransactionsPage } from '../../pages/transactions/history'
import { PrivateLayout } from '../../layouts/private-layout'
import { SidebarProvider } from '../../providers/sidebar'
import { CategoriesPage } from '../../pages/transactions/categories/index'
import { ModalProvider } from '../../providers/modal'

export const PrivateRouter: FC = () => {
  return (
    <ModalProvider>
      <SidebarProvider>
        <PrivateLayout>
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/transactions">
              <Route path="history" element={<TransactionsPage />} />
              <Route path="categories" element={<CategoriesPage />} />
            </Route>
            <Route path="/*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </PrivateLayout>
      </SidebarProvider>
    </ModalProvider>
  )
}
