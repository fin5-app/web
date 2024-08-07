import { FC, useEffect, useState } from 'react'
import { AppRouter } from './infraestructure/router/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { Fin5Loader } from './infraestructure/components/fin5-loader'

const queryClient = new QueryClient()

export const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const tailwindCSS = document.querySelector(
      'link[rel="stylesheet"][href*="tailwind"]'
    )

    const handleLoad = () => {
      setLoading(false)
    }

    if (tailwindCSS) {
      tailwindCSS.addEventListener('load', handleLoad)
      return () => {
        tailwindCSS.removeEventListener('load', handleLoad)
      }
    } else {
      setLoading(false)
    }
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      {loading && <Fin5Loader />}
      <div className={`${loading && 'hidden'}`}>
        <AppRouter />
      </div>
    </QueryClientProvider>
  )
}

export default App
