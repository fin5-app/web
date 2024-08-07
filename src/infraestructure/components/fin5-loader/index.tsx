import Fin5 from '../../../assets/fin5.svg'

export const Fin5Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="text-4xl font-bold flex items-center">
        <Fin5 className="h-8 w-8 ml-2 animate-fade-in-out" />
      </div>
    </div>
  )
}
