import RateCard from "../cards/RateCard";

export default function RateField() {
    return (
        <div className="w-full h-[300px] bg-white rounded-6 p-4 pt-3 overflow-hidden">
            <h3 className="text-rem-heading-xm s_lg:text-heading-ss-bold pb-2">
                Топ лидеров
            </h3>

            <div className="flex flex-wrap w-full h-[240px] justify-between overflow-y-scroll gap-4 scroll-hidden xx_lg:justify-center">

                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />
                <RateCard name="name" position="1" />

            </div>
        </div>
    )
}