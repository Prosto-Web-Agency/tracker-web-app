import Image from "next/image"
import {TInsightCard} from "@/models/traker";

export type TInsightCardComponent = TInsightCard & {
    header: string
    open?: boolean
    setModalDataInsight?: any
}

export default function InsightCard({ header, first_name, text }: TInsightCardComponent) {
    return (
        <div className="h-[192px] cursor-pointer w-[330px] min-w-[330px] bg-orange-class px-5 pt-4 pb-6 text-white border-2 duration-100 hover:border-0 border-white">
            <h4 className="text-heading-ss-bold">
                {header}
            </h4>

            <div className="py-3 flex gap-1 items-center">
                <Image
                    className="rounded-4 h-[27px] w-[27px] object-cover"
                    height={27}
                    width={27}
                    src={'/delete/person.jpeg'}
                    alt='person'
                />

                <p className="text-13_600">{first_name}</p>
            </div>

            <p className="h-[86px] overflow-hidden text-12_500">
                {text}
            </p>
        </div>
    )
}
