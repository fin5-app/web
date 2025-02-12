import { FC } from 'react'
import { Footer } from '@components/footer/Footer'
import { Navbar } from '@components/navbar/Navbar'
import faqItems from '@constants/faq'
import { FaqCard } from './components/FaqCard'

export const Faq: FC = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center py-10">
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold">
          Preguntas frecuentes
        </h1>
      </div>
      <div className="min-h-screen bg-primary-100 w-full justify-center flex">
        <div className="grid grid-cols-2 w-full p-5 gap-4">
          {faqItems.map((item, index) => {
            return (
              <div
                className={`${
                  index % 2 === 0 && 'justify-end'
                } w-full items-center col-span-2 lg:col-span-1 flex`}
              >
                <FaqCard faqItem={item} />
              </div>
            )
          })}
        </div>
      </div>
      <Footer />
    </div>
  )
}
