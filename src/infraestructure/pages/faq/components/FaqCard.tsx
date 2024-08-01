import { FC } from "react"
import { FAQItem } from "../../../constants/faq"


interface FaqCardProps {
    faqItem: FAQItem
}

// Todo Tituo, icono y borde violeta hover

export const FaqCard: FC<FaqCardProps> = ({ faqItem }) => {
    return (
        <div className="p-3 w-full lg:w-2/3 bg-secondary-100 hover:border-purple-100 hover:shadow-purple-200 hover:shadow-sm border-borderPrimary-100 rounded-[6px] border-[1px] flex flex-col items-center justify-center space-y-2 h-[12rem] overflow-hidden">
            <div>
                {faqItem.icon}
            </div>
            <div>
                <h1 className="text-center text-text-primary font-bold text-sm lg:text-lg">{faqItem.question}</h1>
            </div>
            <div>
                <p className="text-text-secondary text-xs lg:text-sm text-center">{faqItem.answer}</p>
            </div>
        </div>
    )
}
