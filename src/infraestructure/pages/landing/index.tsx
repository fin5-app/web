import { FC } from 'react'
import Navbar from '../../components/navbar'
import Fin5Dashboard from '../../../assets/fin5_dashboard.jpeg'
import Fin5DashboardPhone from '../../../assets/fin5_dashboard_phone.jpeg'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/footer/index'

export const LandingPage: FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-secondary-100 overflow-hidden relative">
      <Navbar />
      <section className="grid grid-cols-2 px-5 sm:px-20 py-10 xl:py-20 xl:h-[650px]">
        <div className="grid grid-cols-5 col-span-2 lg:col-span-1 items-center">
          <div className="col-span-5 xl:col-span-4 h-fit space-y-4">
            <p className="text-5xl sm:text-7xl text-white font-semibold tracking-tighter">
              Todo bajo <span className="text-purple-100">control</span>
            </p>
            <p className="text-xl sm:text-3xl font-normal tracking-wide text-white ">
              Simplifica tu vida financiera con nuestra herramienta intuitiva.
            </p>
            <p className="text-purple-100 font-semibold text-xs sm:text-lg py-2 tracking-wide">
              Probá Fin5 de manera gratuita 14 días
            </p>
            <Link
              to={'/login'}
              className="flex w-fit py-2 px-3 text-white bg-purple-200 rounded-[6px] font-semibold text-sm"
            >
              <p>Comenzar ahora</p>
            </Link>
          </div>
        </div>
        <div className="py-10 sm:py-5 lg:py-0 col-span-2 lg:col-span-1">
          <div className="w-[100%] xl:w-[60rem] xl:h-[35rem] relative mx-auto xl:absolute xl:top-20 xl:-right-60 rounded-xl overflow-hidden p-5 xl:bg-black hidden xl:block">
            <div className="rounded-lg xl:bg-black overflow-hidden w-full h-full relative">
              <img
                src={Fin5Dashboard}
                alt={'fin5-phone'}
                className="rounded-lg xl:right-24 relative"
              />
            </div>
          </div>
          <div className="w-[300px] h-[600px] xl:absolute relative mx-auto xl:top-[8rem] xl:right-[32rem] rounded-[2rem] overflow-hidden p-4 bg-black flex justify-center">
            <div className="rounded-b-xl h-[10px] w-[100px] absolute top-4 bg-black z-10" />
            <img
              src={Fin5DashboardPhone}
              alt={'fin5-phone-dashboard'}
              className="rounded-3xl relative"
            />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-5 py-20 px-5">
        <div className="col-span-5 space-y-8">
          <p className="text-3xl sm:text-4xl text-purple-100 font-normal text-center">
            ¿Tienes problemas para administrar tu dinero?
          </p>
          <div className="space-y-2">
            <p className="text-xl sm:text-2xl font-semibold text-white text-center">
              Aquí esta la solución
            </p>
            <p className="text-lg sm:text-xl text-white font-light text-center">
              Organiza tus finanzas, establece metas y logra el éxito financiero
              con facilidad
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 pt-10 xl:pt-20">
        <Footer />
      </div>
    </main>
  )
}
