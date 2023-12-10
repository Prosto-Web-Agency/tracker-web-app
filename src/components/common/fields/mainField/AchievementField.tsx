import SwiperComponent from "@/components/common/swiper";

export default function AchievmentField() {
    return (
        <div className="w-[282px] relative lg:w-full h-[300px] bg-white overflow-hidden bg-orange-class">
            <h3 className="text-heading-s mt-3 ml-4 text-white s_lg:text-heading-ss-bold pb-2">
                Ранги
            </h3>

            <SwiperComponent
                swiperCards={[
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                    {
                        image: "f",
                        name: "Анвар Кайратович",
                        achieveName: "Новый ранг"
                    },
                ]}
                cardType="achievement"
            >
            </SwiperComponent>
        </div>
    )
}