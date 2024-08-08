import { FC, useEffect } from 'react'
import { MyTransactions } from './components/my-transactions'
import { useSearchParams } from 'react-router-dom'

export const TransactionsPage: FC = () => {
  const searchParams = new URLSearchParams()
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    searchParams.set('page', '1')
    searchParams.set('items', '7')
    setParams(searchParams.toString())
  }, [params])

  return (
    <div className="max-w-100 flex flex-wrap">
      <MyTransactions />
    </div>
  )
}
