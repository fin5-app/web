import ChevronUp from '../../../../assets/chevron-up.svg'
import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

interface TableFooterProps {
  total_pages?: number
  current_page?: number
}

export const TableFooter: FC<TableFooterProps> = (props) => {
  const { total_pages, current_page } = props
  const [params, setParams] = useSearchParams()

  const handleClickPage = (page: number) => {
    const searchParams = new URLSearchParams(params)
    searchParams.set('page', page.toString())
    setParams(`${searchParams.toString()}`)
  }

  const handleClickNextPage = () => {
    const searchParams = new URLSearchParams(params)
    const currentPage = params.get('page')
    if (total_pages && currentPage && parseInt(currentPage) < total_pages) {
      searchParams.set('page', (parseInt(currentPage) + 1).toString())
      setParams(`${searchParams.toString()}`)
    }
  }

  const handleClickBackPage = () => {
    const searchParams = new URLSearchParams(params)
    const currentPage = params.get('page')
    if (currentPage && currentPage > '1') {
      searchParams.set('page', (parseInt(currentPage) - 1).toString())
      setParams(`${searchParams.toString()}`)
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(params)
    const page = params.get('page')
    if (page) {
      return
    } else {
      searchParams.set('page', '1')
      setParams(`${searchParams.toString()}`)
    }
  }, [])

  return (
    <div className="grid grid-cols-2 px-3 py-4 border-y-[1px] border-borderPrimary-100">
      <div className="flex space-x-4 items-center">
        <ChevronUp
          className="h-5 w-5 -rotate-90 text-text-secondary cursor-pointer hover:text-text-primary"
          onClick={handleClickBackPage}
        />
        <div className="flex space-x-4">
          {total_pages
            ? Array.from(new Array(total_pages)).map((_, ind) => (
                <button
                  onClick={() => handleClickPage(ind + 1)}
                  key={ind + 1}
                  className={`text-xs text-text-secondary ${
                    current_page === ind + 1 ? 'font-bold' : 'font-thin'
                  }`}
                >
                  {ind + 1}
                </button>
              ))
            : null}
        </div>
        <ChevronUp
          className="h-5 w-5 rotate-90 text-text-secondary cursor-pointer hover:text-text-primary"
          onClick={handleClickNextPage}
        />
      </div>
    </div>
  )
}
