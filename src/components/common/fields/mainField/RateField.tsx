import RateCard from "../../cards/RateCard";

export default function RateField() {
    return (
        <div className="w-[calc(100%-670px)] max-w-[610px] lg:max-w-full lg:w-full h-[300px] bg-white rounded-6 p-4 pt-3 overflow-hidden">
            <h3 className="text-heading-s s_lg:text-heading-ss-bold pb-2">
                Топ лидеров
            </h3>

            <div className="flex flex-wrap rounded-t-5 w-full h-full pb-12 s_lg:pb-5 justify-between overflow-y-scroll gap-4 scroll-hidden xx_lg:justify-center">

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