import { useDebouncedCallback } from 'use-debounce'
import SearchIcon from '../../../../../assets/search.svg'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'

interface SearchBarProps {
  placeholder: string
}

export const SearchBar: FC<SearchBarProps> = (props) => {
  const { placeholder } = props
  const [params, setParams] = useSearchParams()

  const handleSearch = useDebouncedCallback((term) => {
    const searchParams = new URLSearchParams(params)
    if (term) {
      searchParams.set('q', term)
      searchParams.set('page', '1')
      searchParams.set('items', '7')
    } else {
      searchParams.delete('q')
    }
    setParams(`${searchParams.toString()}`)
  }, 300)

  return (
    <div className="w-full relative flex flex-1 flex-shrink-0">
      <input
        className="w-full rounded-md border border-borderPrimary-100 py-2 pl-10 text-sm placeholder:text-text-secondary bg-secondary-100 text-text-primary"
        placeholder={placeholder}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={params.get('q')?.toString()}
      />
      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}
